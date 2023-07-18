import { IonPage,IonHeader,IonToolbar,IonTitle,IonContent } from "@ionic/react";

function DelData(){
    return(

        <IonPage>
               <IonHeader>
           <IonToolbar>
             <IonTitle>
             delete
             </IonTitle>
           </IonToolbar>
          </IonHeader>
          <IonContent className='ion-padding'>
           Add some content here
          </IonContent> 
        </IonPage>

    )
}

export default DelData;