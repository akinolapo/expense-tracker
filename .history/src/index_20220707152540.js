import React from "react";
import ReactDom from 'react-dom';
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from './App';
import './index.css'

ReactDom.render(
    <SpeechProvider appId="" language>
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);