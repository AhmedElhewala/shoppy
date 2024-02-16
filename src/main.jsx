import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";

import ErrorFallback from './ui/ErrorFallback.jsx';
import store from "./store";
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      
    <Provider store={store}>
      <App />
    </Provider>
    </ErrorBoundary>
  </React.StrictMode>
)