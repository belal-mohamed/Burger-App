import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { error: false };
    }
  
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { error: true };
      }
  
    render() {
      if (this.state.error) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
      else return this.props.children; 
    }
  }
export default ErrorBoundary;