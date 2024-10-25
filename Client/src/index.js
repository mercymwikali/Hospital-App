// index.js or App.js (or any other root file)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Your main component
import { ConfigProvider } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#002329',
          colorBorder:'#62c1db',
          colorPrimaryBg	:'#002329',
          colorText:'#000',
          colorIcon:'#FAFAFA'
        },
        components: {
          Menu: {
            itemSelectedBg: '#5DBF9D',
            itemColor: '#000',
            itemSelectedColor:'#000',
            itemHoverBg:'rgba(93,191,157, 0.6)',
            itemHoverColor:'#000',
          },
          Input:{
            hoverBorderColor:'#62c1db', 
            activeBorderColor:'#67336d',
            // activeShadow:'rgb(0, 0, 0)'
          },
          Table:{
            headerBg	:'#007580',
            headerColor:'#002329',
            itemColor:"#fff",
            headerSortActiveBg:'#002329',
       
          },
          Dropdown:{
            itemColor:'#000'
          },
          Tabs:{
            colorTextDescription:'#000'

          },
          Select:{
            // colorText: '#FAFAFA',
            optionSelectedColor: '#FAFAFA',
          }
        }
      }}>
        <Provider store={store}>
       <App />
       </Provider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
