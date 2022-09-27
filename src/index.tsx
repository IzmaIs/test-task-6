import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles.css'
import App from './App';
import {Provider} from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);
