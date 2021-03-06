import React from 'react';
import ReactDOM from 'react-dom';
import { initializeFirebase } from "./push-notification";
import './index.css';
import App from './App';
import serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
<Provider store={store}>
<BrowserRouter>
<App />
</BrowserRouter>
</Provider>,
document.getElementById('root')
);
initializeFirebase();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker();
