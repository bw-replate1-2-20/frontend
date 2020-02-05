import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./reducers";

// Material UI theme and basic styling
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/core/styles';
import ReplateTheme from './ReplateTheme';

import App from "./components/App";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));



const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={ReplateTheme}>
    <CssBaseline />
    <App />
    </ThemeProvider>
  </Provider>,
  rootElement
);
