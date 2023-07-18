import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import GetData from './Comp/GetData';
import AddData from './Comp/AddData';
import EditData from './Comp/EditData';
import DelData from './Comp/DeleteData';
import { IonButton } from '@ionic/react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Link to="/">
 <IonButton>Back</IonButton></Link>
 {/* <Link to="/adddata"> */}
 {/* <IonButton>add</IonButton></Link> */}
     <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/getdata" element={<GetData/>}/>
      <Route path="/adddata" element={<AddData/>}/>
      <Route path="/editdata" element={<EditData/>}/>
      <Route path="/deletedata" element={<DelData/>}/>
     </Routes>
 </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
