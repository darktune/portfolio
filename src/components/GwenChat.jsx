import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Send, Trash2, ArrowRight, CornerDownLeft, Bot, User, CheckCircle2, Cpu, Terminal, ArrowUpRight } from 'lucide-react';
import { queryGwenKnowledge } from '../lib/gwen/retrieval';
import { gwenKnowledgeBase } from '../data/gwenKnowledge';
import ProjectLogo from './ProjectLogo';

export default function GwenChat({ onOpenCaseStudy, externalPrompt }) {
  const [messages, setMessages] = useState([
    {
      id: "intro",
      role: "assistant",
      text: "I am **GWEN**, Abraham's AI portfolio intelligence. Ask me anything about his systems architecture (**CivOS**), smart contract protocol (**D-MEX**), quantitative terminal (**STELCERA**), 3D spatial fashion (**Virtual Atelier**), pointillism fine art, or academic trajectory at Covenant University.",
      contextCard: {
        title: "Abraham Toluwani",
        badge: "Systems Architect & Aspiring Polymath",
        detail: "Covenant University · Class of 2026",
        actionText: "EXPLORE FLAGSHIPS",
        targetSection: "work"
      },
      followUps: gwenKnowledgeBase.suggestedPrompts.slice(0, 4)
    }
  ]);

  const [inputPrompt, setInputPrompt] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [thinkingStateText, setThinkingStateText] = useState('');
  const chatBottomRef = useRef(null);

  // If triggered with external prompt (e.g. from hero or global search)
  useEffect(() => {
    if (externalPrompt) {
      handleSendPrompt(externalPrompt);
    }
  }, [externalPrompt]);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking, isStreaming]);

  const handleSendPrompt = async (promptToSend) => {
    const text = promptToSend || inputPrompt;
    if (!text.trim() || isStreaming || isThinking) return;

    const userMsgId = `user-${Date.now()}`;
    const newMessages = [...messages, { id: userMsgId, role: "user", text: text.trim() }];
    setMessages(newMessages);
    setInputPrompt('');
    setIsThinking(true);

    setThinkingStateText("Connecting to GWEN intelligence...");

    // Format conversation history for Gemini LLM
    const historyPayload = messages.slice(-6).map(m => ({
      role: m.role,
      text: m.text
    }));

    let fullAnswer = '';
    let contextCard = null;
    let followUps = null;

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7000);

      const response = await fetch('/api/gwen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text.trim(), history: historyPayload }),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        if (data && data.answer && !data.fallback) {
          fullAnswer = data.answer;
          const localMatch = queryGwenKnowledge(text);
          contextCard = localMatch.contextCard;
          followUps = localMatch.followUps;
        }
      }
    } catch {
      // Graceful offline or timeout handling
    }

    // Seamless zero latency fallback to local knowledge engine
    if (!fullAnswer) {
      const fallbackResult = queryGwenKnowledge(text);
      fullAnswer = fallbackResult.answer;
      contextCard = fallbackResult.contextCard;
      followUps = fallbackResult.followUps;
    }

    setIsThinking(false);
    setIsStreaming(true);

    const assistantMsgId = `assistant-${Date.now()}`;

    // Add empty assistant message to stream into
    setMessages(prev => [
      ...prev,
      {
        id: assistantMsgId,
        role: "assistant",
        text: "",
        contextCard: contextCard,
        followUps: followUps
      }
    ]);

    // Progressive streaming effect (word by word)
    const words = fullAnswer.split(' ');
    let currentText = '';

    for (let i = 0; i < words.length; i++) {
      currentText += (i === 0 ? '' : ' ') + words[i];
      setMessages(prev =>
        prev.map(m => m.id === assistantMsgId ? { ...m, text: currentText } : m)
      );
      await new Promise(r => setTimeout(r, 22)); // smooth reading speed
    }

    setIsStreaming(false);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "intro-reset",
        role: "assistant",
        text: "Conversation reset. What system or protocol would you like to explore?",
        contextCard: null,
        followUps: gwenKnowledgeBase.suggestedPrompts.slice(0, 4)
      }
    ]);
  };

  const handleContextAction = (card) => {
    if (card.projectId && onOpenCaseStudy) {
      onOpenCaseStudy({ id: card.projectId });
    } else if (card.targetSection) {
      const el = document.getElementById(card.targetSection);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="gwen" className="py-24 max-w-7xl mx-auto px-6 sm:px-8 hairline-t">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-3 max-w-2xl">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase tracking-wider">
            <Sparkles size={14} />
            <span>07.0 // AI-NATIVE INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-[var(--text-primary)]">
            GWEN — Portfolio AI Assistant
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)]">
            An intelligent, transparent assistant loaded with verified knowledge about Abraham's system architectures, codebases, research papers, and polymath philosophy.
          </p>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-3 bg-[var(--bg-surface)] p-2.5 rounded-lg hairline-all text-xs font-mono text-[var(--text-secondary)]">
          <span className="w-2 h-2 rounded-full bg-[var(--text-primary)] animate-signal-pulse" />
          <span>GWEN / READY · VERIFIED LOCAL RAG</span>
        </div>
      </div>

      {/* Main Chat Workstation Shell */}
      <div className="bg-[var(--bg-surface)] hairline-all rounded-xl shadow-sm overflow-hidden flex flex-col h-[650px] max-h-[85vh]">
        
        {/* Chat Titlebar */}
        <div className="px-6 py-3.5 hairline-b bg-[var(--bg-surface-raised)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded bg-[var(--text-primary)] text-[var(--bg-primary)] flex items-center justify-center font-bold text-[10px]">
              G
            </div>
            <span className="font-semibold text-[var(--text-primary)]">GWEN v3.0 // AI INTERACTION TERMINAL</span>
          </div>

          <button
            onClick={handleClearChat}
            className="flex items-center gap-1 text-[11px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            title="Reset conversation"
          >
            <Trash2 size={13} />
            <span>CLEAR CONVERSATION</span>
          </button>
        </div>

        {/* Chat Message Scrollport */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === 'assistant' && (
                <div className="w-7 h-7 rounded bg-[var(--bg-surface-raised)] hairline-all flex items-center justify-center shrink-0 text-[var(--text-primary)]">
                  <Bot size={15} />
                </div>
              )}

              <div className={`max-w-2xl space-y-3 ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                {/* Message Bubble */}
                <div
                  className={`p-4 sm:p-5 rounded-xl text-xs sm:text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium rounded-tr-none'
                      : 'bg-[var(--bg-surface-raised)] text-[var(--text-primary)] hairline-all rounded-tl-none font-sans'
                  }`}
                >
                  <div className="whitespace-pre-wrap">
                    {msg.text}
                    {isStreaming && msg.id === messages[messages.length - 1]?.id && (
                      <span className="inline-block w-2 h-4 bg-[var(--text-primary)] ml-1 animate-cursor-blink" />
                    )}
                  </div>
                </div>

                {/* Embedded Context Card (if provided) */}
                {msg.contextCard && (
                  <div className="p-4 rounded bg-[var(--bg-surface)] hairline-all text-xs font-mono space-y-2 border-l-2 border-l-[var(--text-primary)]">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <ProjectLogo project={msg.contextCard.projectId || msg.contextCard.title} size={15} />
                        <span className="font-bold text-[var(--text-primary)]">{msg.contextCard.title}</span>
                      </div>
                      <span className="text-[10px] text-[var(--text-muted)] font-semibold">{msg.contextCard.badge}</span>
                    </div>
                    <p className="text-[11px] text-[var(--text-secondary)]">{msg.contextCard.detail}</p>
                    <button
                      onClick={() => handleContextAction(msg.contextCard)}
                      className="inline-flex items-center gap-1.5 text-[11px] text-[var(--text-primary)] font-bold hover:underline pt-1"
                    >
                      <span>{msg.contextCard.actionText}</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                )}

                {/* Follow-up Suggestion Chips */}
                {msg.followUps && msg.followUps.length > 0 && msg.id === messages[messages.length - 1]?.id && !isStreaming && (
                  <div className="pt-2 space-y-1.5">
                    <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider block font-semibold">
                      RECOMMENDED FOLLOW-UP:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {msg.followUps.map((chip, cIdx) => (
                        <button
                          key={cIdx}
                          onClick={() => handleSendPrompt(chip)}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-[var(--bg-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)] hairline-all transition-all text-left"
                        >
                          {chip} →
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {msg.role === 'user' && (
                <div className="w-7 h-7 rounded bg-[var(--text-primary)] text-[var(--bg-primary)] flex items-center justify-center shrink-0">
                  <User size={14} />
                </div>
              )}
            </div>
          ))}

          {/* Thinking Indicator */}
          {isThinking && (
            <div className="flex gap-4 items-start">
              <div className="w-7 h-7 rounded bg-[var(--bg-surface-raised)] hairline-all flex items-center justify-center shrink-0 text-[var(--text-primary)]">
                <Bot size={15} />
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--bg-surface-raised)] hairline-all text-xs font-mono text-[var(--text-primary)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--text-primary)] animate-ping" />
                <span>{thinkingStateText}</span>
              </div>
            </div>
          )}

          <div ref={chatBottomRef} />
        </div>

        {/* Prompt Input Bar (Beautiful UI Pattern) */}
        <div className="p-4 sm:p-6 hairline-t bg-[var(--bg-surface)]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendPrompt();
            }}
            className="flex items-center gap-3 p-2 rounded-xl bg-[var(--bg-surface-raised)] hairline-all focus-within:border-[var(--border-strong)] transition-all"
          >
            <input
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder="Ask Gwen anything about Abraham's systems, code, or background..."
              className="flex-1 bg-transparent px-3 py-2 text-xs sm:text-sm font-mono text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none"
              disabled={isStreaming || isThinking}
            />

            <button
              type="submit"
              disabled={!inputPrompt.trim() || isStreaming || isThinking}
              className="px-4 py-2 rounded-lg bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-all disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1.5 text-xs font-mono font-bold shadow-sm"
              aria-label="Send prompt"
            >
              <span>SEND</span>
              <CornerDownLeft size={13} />
            </button>
          </form>

          {/* Quick Tags / Suggested Prompts Strip */}
          <div className="flex flex-wrap items-center gap-1.5 pt-3 text-[10px] font-mono text-[var(--text-muted)]">
            <span className="font-semibold">QUICK PROMPTS:</span>
            {["@CivOS", "@D-MEX", "@STELCERA", "Polymath Philosophy", "Virtual Atelier"].map((tag, tIdx) => (
              <button
                key={tIdx}
                type="button"
                onClick={() => handleSendPrompt(tag.startsWith('@') ? `Tell me about ${tag}` : tag)}
                className="px-2 py-0.5 rounded bg-[var(--bg-subtle)] hover:text-[var(--text-primary)] transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
