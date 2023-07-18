// import { IonTitle,IonToolbar, IonContent, IonHeader, IonItem, IonList, IonPage, IonRouterLink } from "@ionic/react";
// import {data} from "../Data/data.js"
// // import '@ionic/react/css/normalize.css';
// // import '@ionic/react/css/structure.css';
// // import '@ionic/react/css/typography.css';
// import '@ionic/react/css/padding.css';
// import { useState } from "react";
// import {IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
// import "./GetData.css"
// import HeaderAppBar from "./Header.js";
// import AddData from "./AddData.js";

// // import '@ionic/react/css/float-elements.css';
// // import '@ionic/react/css/text-alignment.css';
// // import '@ionic/react/css/text-transformation.css';
// // import '@ionic/react/css/flex-utils.css';
// // import '@ionic/react/css/display.css';

// function GetData(){
//      const [products,setProducts] = useState(data)
//     return(<>
//     <IonPage>
//         <IonHeader translucent={true}>
//         <IonToolbar>
//             <IonContent>
//                <IonRouterLink routerLink="/adddata">
//                      adddata
//                </IonRouterLink>
//             </IonContent>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent fullscreen={true} className="ion-padding content">
      
//        <div className="overallcard">
//             {products.map((prod)=> 
//                 <IonCard className="getcards">
//       <img alt="Silhouette of mountains" src={prod.image} />
//       <IonCardHeader>
//         <IonCardTitle>{prod.prodname}</IonCardTitle>
//         <IonCardSubtitle>{prod.category}</IonCardSubtitle>
//       </IonCardHeader>

//       <IonCardContent>{prod.description}</IonCardContent>
//       <IonButton fill="clear">Action 1</IonButton>
//       <IonButton fill="clear">Action 2</IonButton>
//     </IonCard>
//           )}</div>
//           </IonContent>
//           </IonPage>
//    </>
    
//     )
// }

// export default GetData;