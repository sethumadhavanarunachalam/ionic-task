import { IonPage,IonHeader,IonToolbar,IonTitle,IonContent } from "@ionic/react";

function EditData(){
    return(
        <IonPage>
               <IonHeader>
           <IonToolbar>
             <IonTitle>
               edit
             </IonTitle>
           </IonToolbar>
          </IonHeader>
          <IonContent className='ion-padding'>
           Add some content here
          </IonContent> 
        </IonPage>

    )
}

export default EditData;