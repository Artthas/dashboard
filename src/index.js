import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { rootReducer } from './store/root-reducer';
import { createAPI } from './services/api';
import { configureStore } from '@reduxjs/toolkit';
import reportWebVitals from "./reportWebVitals";
import SimpleReactLightbox from "simple-react-lightbox";
import  ThemeContext  from "./context/ThemeContext";

const api = createAPI(() =>
	store.dispatch()
);

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: {
				extraArgument: {api},
			},
		}),
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store = {store}>
            <SimpleReactLightbox>
                <BrowserRouter basename='/'>
                    <ThemeContext>
                        <App />
                    </ThemeContext>  
                 { /*   <App /> */  }
                </BrowserRouter>    
            </SimpleReactLightbox>
        </Provider>	
    </React.StrictMode>,
    document.getElementById("root")
);
reportWebVitals();
