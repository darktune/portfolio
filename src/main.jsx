import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

class RootErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Portfolio Root Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "40px", backgroundColor: "#0a0a0a", color: "#f4f4f0", fontFamily: "monospace", minHeight: "100vh" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "12px", color: "#ffffff" }}>System Recovery Mode</h2>
          <p style={{ color: "#a1a1a1", marginBottom: "20px" }}>An unexpected rendering state occurred. Click below to reload the workstation.</p>
          <pre style={{ padding: "16px", backgroundColor: "#181818", border: "1px solid #333", borderRadius: "8px", overflowX: "auto", fontSize: "12px", color: "#ff6b6b" }}>
            {this.state.error?.toString()}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "#f4f4f0", color: "#0a0a0a", border: "none", borderRadius: "6px", fontWeight: "bold", cursor: "pointer" }}
          >
            Reload Interface
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </React.StrictMode>
);
