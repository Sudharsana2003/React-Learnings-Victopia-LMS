import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//Added for Ref and Portal demos
// The first video mentioned using React.createRef, which we will use.

/* ===============================================
1. Refs on Class Components (Calling Child Method)
===============================================
*/

// Child Class Component (Input.js equivalent)
class ClassInput extends Component {
  constructor(props) {
    super(props);
    // 1. Create a ref for the native input element
    this.inputRef = React.createRef();
  }

  // Method to be called by the parent component
  focusInput() {
    this.inputRef.current.focus();
    console.log("ClassInput: Input focused via parent component call.");
  }

  render() {
    return (
      <div>
        <label>Class Ref Input: </label>
        {/* 2. Attach the ref to the native input element */}
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

// Parent Component (FocusInput.js equivalent)
class ClassRefDemo extends Component {
  constructor(props) {
    super(props);
    // 1. Create a ref to attach to the child Class Component
    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    // 3. Access the child component instance and call its method
    if (this.componentRef.current) {
      this.componentRef.current.focusInput();
    }
  };

  render() {
    return (
      <div>
        <h3>1. Refs on Class Components</h3>
        <p>Parent component calls a method on the child class component.</p>
        {/* 2. Attach the ref to the child Class Component */}
        <ClassInput ref={this.componentRef} />
        <button onClick={this.clickHandler}>
          Focus Class Input (Via Method Call)
        </button>
        <hr/>
      </div>
    );
  }
}

/* ===============================================
2. Ref Forwarding (Parent to Child's Native DOM)
===============================================
*/

// Child Functional Component (FRInput.js equivalent) - Needs Ref Forwarding
// The second parameter 'ref' is the ref passed from the parent.
const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <label>Forwarded Ref Input: </label>
      {/* Attach the forwarded ref to the native DOM element */}
      <input type="text" ref={ref} />
    </div>
  );
});

// Parent Component (FRParentInput.js equivalent)
class ForwardRefDemo extends Component {
  constructor(props) {
    super(props);
    // 1. Create a ref in the parent
    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    // 4. Access the native DOM element directly
    if (this.inputRef.current) {
      this.inputRef.current.focus();
      console.log("ForwardRefDemo: Input focused via direct ref.");
    }
  };

  render() {
    return (
      <div>
        <h3>2. Ref Forwarding</h3>
        <p>Parent component directly accesses the child's native input element.</p>
        {/* 2. Pass the ref to the functional child component */}
        <FRInput ref={this.inputRef} />
        <button onClick={this.clickHandler}>
          Focus Forwarded Input (Via Ref Access)
        </button>
        <hr/>
      </div>
    );
  }
}

/* ===============================================
3. React Portals (Rendering outside the DOM)
===============================================
*/

// Portal Component (PortalDemo.js equivalent)
// Renders its children into the DOM node with the ID 'portal-root'.
const PortalDemo = (props) => {
  // Check if the portal root element exists before creating the portal
  const portalRoot = document.getElementById('portal-root');
  
  if (!portalRoot) {
    return <p style={{color: 'red'}}>Error: 'portal-root' DOM node not found. Please check index.html.</p>;
  }

  return ReactDOM.createPortal(
    <div style={{
      border: '2px solid purple', 
      padding: '10px', 
      backgroundColor: '#f9f9ff',
      position: 'fixed', // Use fixed for a true modal/portal feel
      top: '20px',
      right: '20px',
      zIndex: 1000 // Ensure it's on top
    }}>
      <h4>3. React Portal Demo</h4>
      <p>This component is rendered OUTSIDE the main 'root' div.</p>
      {props.children}
    </div>,
    portalRoot // The second parameter is the DOM node to mount to
  );
};


/* ===============================================
Main App Component to combine all demos
===============================================
*/

export default function App() {
  return (
    <div className="App" style={{ margin: '20px' }}>
      <h1>React Concepts Demonstrator</h1>
      <p><em>Check the DOM structure in your browser's DevTools to see the difference between the 'root' and 'portal-root' divs.</em></p>
      
      <ClassRefDemo />
      <ForwardRefDemo />

      {/* The Portal Demo itself */}
      <PortalDemo>
        <p>Portal content inside the PortalDemo component.</p>
      </PortalDemo>
    </div>
  );
}