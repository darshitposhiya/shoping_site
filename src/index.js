import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';




ReactDOM.render(
<>
<Provider store={store}>
<BrowserRouter>
<App></App>
</BrowserRouter>
</Provider>

</>,document.getElementById('root'));
