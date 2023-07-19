import { IonPage,IonButton,IonItem,IonHeader,IonToolbar,IonTitle,IonContent, IonList, IonLabel, IonInput } from "@ionic/react";
import { useState } from "react";
import { data } from "../Data/data";
import { useNavigate } from "react-router-dom";
// import { IonPage,IonHeader,IonToolbar,IonTitle,IonContent } from "@ionic/react";

function AddData(){
  const [student,setStudent] = useState(data);

  const [id,setId]=useState("");
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const [native,setNative]=useState("");
  const navigate = useNavigate();
  const handleClick = () =>{
    const newData = {
      id,
      name,
      age,
      native,
    }

    setStudent([...student,newData])
    setId("")
    setName("")
    setAge("")
    setNative("")
    navigate("/getdata")
  }
    return(
        <IonPage>
               <IonHeader>
           <IonToolbar>
             <IonTitle>
           Add Data
             </IonTitle>
           </IonToolbar>
          </IonHeader>
            <IonList>
              <IonItem>
                <IonLabel>
                  ID:
                </IonLabel>
                  <IonInput placeholder="Enter your id"
                  value={id}
                  onIonChange={(event)=> setId(event.detail.value)}
                  >

                  </IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>
                  NAME:
                </IonLabel>
                  <IonInput placeholder="Enter your name"
                  value={name}
                  onIonChange={(event)=> setName(event.detail.value)}
                  >

                  </IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>
                  AGE:
                </IonLabel>
                  <IonInput placeholder="Enter your age"
                  value={age}
                  onIonChange={(event)=> setAge(event.detail.value)}
                  >

                  </IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>
                  NATIVE:
                </IonLabel>
                  <IonInput placeholder="Enter your native"
                  value={native}
                  onIonChange={(event)=> setNative(event.detail.value)}
                  >

                  </IonInput>
              </IonItem>
            </IonList>
            <IonButton onClick={handleClick}>Default</IonButton>
        </IonPage>


    )
}

export default AddData;