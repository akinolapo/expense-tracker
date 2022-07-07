import React from "react";
import ReactDom from 'react-dom';
import { SpeechProvider } from "@speechly/react-client";

import { Provider } from "./context/context";
import App from './App';
import './index.css'

ReactDom.render(
    <SpeechProvider appId="bdc4de17-aa3a-4e1e-a817-93d1eefc9f75" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);