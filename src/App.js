import { Link } from 'react-router-dom';
import './App.css';
import {  IonButton , IonPage, IonTitle,setupIonicReact } from '@ionic/react';


setupIonicReact();
function App() {
  return (
    <IonPage>
      <h1>welcome</h1>
      <Link to="/getdata">
      <IonButton fill="solid">Get data</IonButton></Link>
      <Link to="/adddata">
      <IonButton fill="solid">Add data</IonButton></Link>
           
           
      </IonPage>
   
      
  );
}

export default App;
