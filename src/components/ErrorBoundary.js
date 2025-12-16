import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by ErrorBoundary:", error);
    console.error("Component stack:", info);
  }

  render() {
    if (this.state.hasError) {
      return <h3 style={{ color: "red" }}>Something went wrong</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
