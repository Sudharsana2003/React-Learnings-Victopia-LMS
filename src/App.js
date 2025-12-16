import React, { Component } from "react";
import ReactDOM from "react-dom";

import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

/* ===============================================
1. Refs on Class Components
=============================================== */

class ClassInput extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput() {
    this.inputRef.current.focus();
    console.log("ClassInput: Input focused via parent call");
  }

  render() {
    return (
      <div>
        <label>Class Ref Input: </label>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

class ClassRefDemo extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <h3>1. Refs on Class Components</h3>
        <ClassInput ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Class Input</button>
        <hr />
      </div>
    );
  }
}

/* ===============================================
2. Ref Forwarding
=============================================== */

const FRInput = React.forwardRef((props, ref) => (
  <div>
    <label>Forwarded Ref Input: </label>
    <input type="text" ref={ref} />
  </div>
));

class ForwardRefDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <h3>2. Ref Forwarding</h3>
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Forwarded Input</button>
        <hr />
      </div>
    );
  }
}

/* ===============================================
3. React Portal
=============================================== */

const PortalDemo = (props) => {
  const portalRoot = document.getElementById("portal-root");

  return ReactDOM.createPortal(
    <div style={{ border: "2px solid purple", padding: "10px" }}>
      <h3>3. React Portal</h3>
      <p>Rendered outside root div</p>
      {props.children}
    </div>,
    portalRoot
  );
};

/* ===============================================
4. Error Boundary Demo
=============================================== */

const ErrorBoundaryDemo = () => {
  return (
    <div>
      <h3>4. Error Boundary Demo</h3>

      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>

      <hr />
    </div>
  );
};

/* ===============================================
Main App
=============================================== */

export default function App() {
  return (
    <div style={{ margin: "20px" }}>
      <h1>React Concepts Demonstrator</h1>

      <ClassRefDemo />
      <ForwardRefDemo />

      <PortalDemo>
        <p>Portal content</p>
      </PortalDemo>

      <ErrorBoundaryDemo />

      {/* ===============================================
          5. Higher-Order Component (HOC) Demo
         =============================================== */}
      <div>
        <h3>5. Higher-Order Component Demo</h3>
        <ClickCounter />
        <HoverCounter />
        <hr />
      </div>
    </div>
  );
}
