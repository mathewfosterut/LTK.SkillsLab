import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './tests/reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasicForm from './components/BasicForm';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='/todo' element={<BasicForm />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>   
  </React.StrictMode>
);

reportWebVitals();
