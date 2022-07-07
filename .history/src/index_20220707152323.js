import React from "react";
import ReactDom from 'react-dom';
import

import { Provider } from "./context/context";
import App from './App';
import './index.css'

ReactDom.render(<Provider><App /></Provider>, document.getElementById('root'));