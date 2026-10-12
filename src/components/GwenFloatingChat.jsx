import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Send, Trash2, X, Minimize2, Maximize2, Bot, User, CornerDownLeft, ArrowUpRight, GripVertical } from 'lucide-react';
import GwenIcon from './GwenIcon';
import { queryGwenKnowledge } from '../lib/gwen/retrieval';
import { gwenKnowledgeBase } from '../data/gwenKnowledge';

export default function GwenFloatingChat({ onOpenCaseStudy, externalPrompt, isOpen: controlledIsOpen, onToggleOpen }) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;
  const setIsOpen = onToggleOpen || setInternalIsOpen;

  const [isMaximized, setIsMaximized] = useState(false);
  const [size, setSize] = useState({ width: 400, height: 560 });
  const [messages, setMessages] = useState([
    {
      id: "intro",
      role: "assistant",
      text: "Hello, I am GWEN, Abraham's portfolio companion.\n\nI can share the heart and story behind all of his work: his living world prototypes like CivOS, his fine art started at age six, his high speed financial software, and his lifelong dream of building The OASIS.",
      contextCard: {
        title: "Creative & Systems Journey",
        badge: "Virtual Worlds · Fine Art · Games",
        detail: "Living Worlds · Fair Ownership · Pure Rhythm",
        actionText: "EXPLORE VERIFIED DEPLOYMENTS",
        targetSection: "projects"
      },
      followUps: gwenKnowledgeBase.suggestedPrompts.slice(0, 3)
    }
  ]);

  const [inputPrompt, setInputPrompt] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [thinkingStateText, setThinkingStateText] = useState('');
  const [isResizing, setIsResizing] = useState(false);

  const chatBottomRef = useRef(null);
  const resizeStartRef = useRef({ x: 0, y: 0, w: 400, h: 560 });

  // Handle external prompts
  useEffect(() => {
    if (externalPrompt) {
      setIsOpen(true);
      handleSendPrompt(externalPrompt);
    }
  }, [externalPrompt]);

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isThinking, isStreaming, isOpen]);

  // Mouse drag handler for Top-Left corner resize (anchored at bottom-right)
  const handleTopLeftResizeStart = (e) => {
    e.preventDefault();
    setIsResizing(true);
    resizeStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      w: size.width,
      h: size.height
    };
  };

  const handleMouseMove = useCallback((e) => {
    if (!isResizing) return;
    const deltaX = resizeStartRef.current.x - e.clientX;
    const deltaY = resizeStartRef.current.y - e.clientY;

    const newW = Math.max(340, Math.min(window.innerWidth - 32, resizeStartRef.current.w + deltaX));
    const newH = Math.max(440, Math.min(window.innerHeight - 48, resizeStartRef.current.h + deltaY));

    setSize({ width: newW, height: newH });
  }, [isResizing]);

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, handleMouseMove, handleMouseUp]);

  const handleSendPrompt = async (promptToSend) => {
    const text = promptToSend || inputPrompt;
    if (!text.trim() || isStreaming || isThinking) return;

    const userMsgId = `user-${Date.now()}`;
    const newMessages = [...messages, { id: userMsgId, role: "user", text: text.trim() }];
    setMessages(newMessages);
    setInputPrompt('');
    setIsThinking(true);

    setThinkingStateText("Searching architectural knowledge base...");
    await new Promise(r => setTimeout(r, 300));

    setIsThinking(false);
    setIsStreaming(true);

    const queryResult = queryGwenKnowledge(text);
    const fullAnswer = queryResult.answer;
    const assistantMsgId = `assistant-${Date.now()}`;

    setMessages(prev => [
      ...prev,
      {
        id: assistantMsgId,
        role: "assistant",
        text: "",
        contextCard: queryResult.contextCard,
        followUps: queryResult.followUps
      }
    ]);

    const words = fullAnswer.split(' ');
    let currentText = '';

    for (let i = 0; i < words.length; i++) {
      currentText += (i === 0 ? '' : ' ') + words[i];
      setMessages(prev =>
        prev.map(m => m.id === assistantMsgId ? { ...m, text: currentText } : m)
      );
      await new Promise(r => setTimeout(r, 16));
    }

    setIsStreaming(false);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "intro-reset",
        role: "assistant",
        text: "Conversation reset. What system, protocol, or background detail would you like to investigate?",
        contextCard: null,
        followUps: gwenKnowledgeBase.suggestedPrompts.slice(0, 3)
      }
    ]);
  };

  const handleContextAction = (card) => {
    if (card.projectId && onOpenCaseStudy) {
      onOpenCaseStudy(card.projectId);
    } else if (card.targetSection) {
      const el = document.getElementById(card.targetSection);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 select-none">
      
      {/* 1. Minimized Floating Button: Circular-cornered rectangular chatbox that expands the name Gwen AI */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Gwen AI"
          title="Gwen AI"
          className="group relative flex items-center h-12 px-3.5 ios-chatbox-pill active:scale-95 transition-all duration-300 shadow-xl cursor-pointer"
        >
          {/* Subtle animated background ping on indicator */}
          <div className="flex items-center gap-2">
            <div className="text-[var(--text-primary)] transition-transform duration-200 group-hover:scale-110">
              <GwenIcon size={19} isThinking={isThinking} isTyping={isStreaming} />
            </div>

            {/* Online Status Beacon */}
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-signal-pulse shrink-0" />

            {/* Smooth animated expansion revealing the name "Gwen AI" */}
            <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-mono font-bold tracking-tight text-[var(--text-primary)] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:max-w-[70px] group-hover:ml-1 opacity-0 group-hover:opacity-100">
              Gwen AI
            </span>
          </div>
        </button>
      )}

      {/* 2. Expanded Resizable Floating Chat Window: iOS 26 Glass Window */}
      {isOpen && (
        <div
          style={{
            width: isMaximized ? 'min(760px, calc(100vw - 32px))' : `${size.width}px`,
            height: isMaximized ? 'min(740px, calc(100vh - 48px))' : `${size.height}px`,
            maxHeight: 'calc(100vh - 48px)',
            maxWidth: 'calc(100vw - 32px)'
          }}
          className={`relative bg-[var(--bg-surface-elevated)] border border-[var(--border-strong)] rounded-3xl shadow-2xl flex flex-col overflow-hidden transition-[width,height] ${
            isResizing ? 'duration-0' : 'duration-200'
          } animate-in zoom-in-95 origin-bottom-right`}
        >
          
          {/* Top-Left Corner Resize Handle */}
          <div
            onMouseDown={handleTopLeftResizeStart}
            title="Drag to resize chat window"
            className="absolute top-2 left-2 z-30 w-6 h-6 cursor-nwse-resize flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors opacity-60 hover:opacity-100"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M 2 10 L 10 2 M 6 10 L 10 6 M 2 6 L 6 2" />
            </svg>
          </div>

          {/* Chat Window Header Bar: Solid Elevated Header */}
          <div className="px-5 py-3.5 border-b border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)] pl-9">
            <div className="flex items-center gap-2.5">
              <GwenIcon size={18} />
              <span className="font-bold text-[var(--text-primary)]">GWEN INTELLIGENCE</span>
              <span className="text-[10px] text-emerald-500 font-semibold">● ACTIVE</span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handleClearChat}
                className="p-1.5 rounded-full hover:bg-[var(--bg-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors active:scale-90"
                title="Clear Chat"
              >
                <Trash2 size={13} />
              </button>

              <button
                onClick={() => setIsMaximized(!isMaximized)}
                className="p-1.5 rounded-full hover:bg-[var(--bg-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors active:scale-90"
                title={isMaximized ? "Restore Size" : "Maximize"}
              >
                {isMaximized ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-[var(--bg-subtle)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors active:scale-90"
                title="Minimize Window"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Chat Scrollport: Solid Elevated Background (Zero Transparency Bleed) */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 text-xs font-sans bg-[var(--bg-surface-elevated)]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full ios-pill flex items-center justify-center shrink-0 text-[var(--text-primary)] mt-0.5">
                    <Bot size={13} />
                  </div>
                )}

                <div className={`max-w-[85%] space-y-2.5 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  {/* Bubble */}
                  <div
                    className={`p-4 rounded-2xl leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[var(--text-primary)] text-[var(--bg-canvas)] font-medium rounded-tr-xs shadow-xs'
                        : 'ios-glass-card rounded-tl-xs text-[var(--text-primary)] font-sans'
                    }`}
                  >
                    <div className="whitespace-pre-wrap text-xs sm:text-[13px] leading-relaxed">
                      {msg.text}
                      {isStreaming && msg.id === messages[messages.length - 1]?.id && (
                        <span className="inline-block w-1.5 h-3.5 bg-[var(--text-primary)] ml-1 animate-pulse" />
                      )}
                    </div>
                  </div>

                  {/* Context Card */}
                  {msg.contextCard && (
                    <div className="p-3.5 rounded-2xl ios-pill text-xs font-mono space-y-1.5 border-l-3 border-l-[var(--text-primary)]">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-[var(--text-primary)]">{msg.contextCard.title}</span>
                        <span className="text-[10px] text-[var(--text-muted)] font-semibold">{msg.contextCard.badge}</span>
                      </div>
                      <p className="text-[11px] text-[var(--text-secondary)] leading-tight">{msg.contextCard.detail}</p>
                      <button
                        onClick={() => handleContextAction(msg.contextCard)}
                        className="inline-flex items-center gap-1 text-[11px] text-[var(--text-primary)] font-bold hover:underline pt-1"
                      >
                        <span>{msg.contextCard.actionText}</span>
                        <ArrowUpRight size={12} />
                      </button>
                    </div>
                  )}

                  {/* Follow-up Question Chips: Continuous Rounded Pills */}
                  {msg.followUps && msg.followUps.length > 0 && msg.id === messages[messages.length - 1]?.id && !isStreaming && (
                    <div className="pt-1.5 flex flex-wrap gap-1.5">
                      {msg.followUps.map((chip, cIdx) => (
                        <button
                          key={cIdx}
                          onClick={() => handleSendPrompt(chip)}
                          className="px-3 py-1 rounded-full text-[11px] font-mono ios-pill text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] transition-all text-left active:scale-95"
                        >
                          {chip} →
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {msg.role === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-[var(--text-primary)] text-[var(--bg-canvas)] flex items-center justify-center shrink-0 mt-0.5">
                    <User size={12} />
                  </div>
                )}
              </div>
            ))}

            {/* Thinking Indicator */}
            {isThinking && (
              <div className="flex gap-2.5 items-start">
                <div className="w-6 h-6 rounded-full ios-pill flex items-center justify-center shrink-0 text-[var(--text-primary)]">
                  <Bot size={13} />
                </div>
                <div className="p-3 rounded-2xl ios-pill text-[11px] font-mono text-[var(--text-primary)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span>{thinkingStateText}</span>
                </div>
              </div>
            )}

            <div ref={chatBottomRef} />
          </div>

          {/* Bottom Prompt Form: Specular Frosted Glass Input */}
          <div className="p-3.5 border-t border-[var(--border-subtle)] bg-[var(--bg-surface-elevated)] space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendPrompt();
              }}
              className="flex items-center gap-2 p-1.5 rounded-full ios-pill focus-within:border-[var(--border-strong)] transition-all"
            >
              <input
                type="text"
                value={inputPrompt}
                onChange={(e) => setInputPrompt(e.target.value)}
                placeholder="Ask about systems, code, or background..."
                className="flex-1 bg-transparent px-3 py-1.5 text-xs font-mono text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
                disabled={isStreaming || isThinking}
              />

              <button
                type="submit"
                disabled={!inputPrompt.trim() || isStreaming || isThinking}
                className="p-2.5 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:opacity-90 active:scale-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center shadow-sm"
                aria-label="Send prompt"
              >
                <CornerDownLeft size={13} />
              </button>
            </form>

            {/* Quick Suggested Discovery Chips & Resize Indicator */}
            <div className="flex items-center justify-between pt-1 text-[10px] font-mono text-[var(--text-muted)] px-1">
              <div className="flex items-center gap-1.5 overflow-x-auto">
                <span className="text-[10px] uppercase text-[var(--text-muted)] font-semibold shrink-0">Topics:</span>
                {[
                  { tag: "The OASIS", q: "What is The OASIS and Abraham's vision?" },
                  { tag: "Art Since 6", q: "How does art since age six inspire his software?" },
                  { tag: "CivOS", q: "Tell me about CivOS and living virtual worlds" },
                  { tag: "D MEX", q: "What is D MEX Protocol?" },
                  { tag: "STELCERA", q: "Tell me about STELCERA Terminal" },
                  { tag: "OEES", q: "How does OEES bring scent into games?" }
                ].map((item, tIdx) => (
                  <button
                    key={tIdx}
                    type="button"
                    onClick={() => handleSendPrompt(item.q)}
                    className="px-2 py-0.5 rounded-full ios-pill hover:text-[var(--text-primary)] transition-colors shrink-0 active:scale-95"
                  >
                    {item.tag}
                  </button>
                ))}
              </div>

              {/* Bottom-Right Corner Resize Indicator */}
              <span className="opacity-50 text-[9px] flex items-center gap-0.5 pl-2" title="Resizable from top-left handle">
                <GripVertical size={11} />
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
