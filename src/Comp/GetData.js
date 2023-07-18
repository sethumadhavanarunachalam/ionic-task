import { IonPage,IonHeader,IonToolbar,IonTitle,IonContent, useIonToast } from "@ionic/react";
import { useState } from "react";
import { IonItem, IonList, IonLabel, IonInput } from "@ionic/react";

import { data } from "../Data/data";
import { IonCard,IonButton ,IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { Link } from "react-router-dom";

function GetData(){
const [student,setStudent] = useState(data);
const [editId,setEditid] = useState("");
const [show,setShow] = useState(false);
const [id,setId]=useState("");
const [name,setName]=useState("");
const [age,setAge]=useState("");
const [native,setNative]=useState("");
const [presentToast] = useIonToast();

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
  presentToast({message:"data added Sucessfully",duration:1500,})
}
 const deleteData = (studID) =>{
     const studentData = student.filter((stud) => stud.id != studID);
     setStudent(studentData)
     presentToast({message:"deleted Sucessfully",duration:1500,})
 }

 const EditData = (studID) => {
    setShow(!show)
    setEditid(studID)
    const selectedStudent = student.find(stud => stud.id == studID);
    setId(selectedStudent.id)
    setName(selectedStudent.name)
    setAge(selectedStudent.age)
    setNative(selectedStudent.native)
 }

   const updateData = () => {
    const dataIndex = student.findIndex((stud) => stud.id == editId);
    const updateObj = {
        name,
        id,
        native,
        age,
    }

    student[dataIndex] = updateObj;
    setStudent([...student])
    presentToast({message:"updated Sucessfully",duration:1500,})
}
    return(
        <IonPage>
           
            {/* < IonButton onClick={()=>setShow(!show)}>ADD</IonButton> */}
            
               <IonHeader>
           <IonToolbar>
             <IonTitle>
               Get
             </IonTitle>
           </IonToolbar>
          </IonHeader>
          {student.map((stud)=> 
           <IonCard>
           <IonCardHeader>
             <IonCardTitle>Name:  {stud.name}</IonCardTitle>
             <IonCardSubtitle>ID:  {stud.id}</IonCardSubtitle>
             <IonCardSubtitle>AGE:  {stud.age}</IonCardSubtitle>
             <IonCardSubtitle>Native: {stud.native}</IonCardSubtitle>
           </IonCardHeader>
           <IonButton fill="clear" onClick={() => EditData(stud.id)}>Edit</IonButton>
            <IonButton fill="clear" onClick={()=>deleteData(stud.id)}>Remove</IonButton>
         </IonCard>
          )}
          <h3> Add</h3>
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
            
            <IonButton onClick={handleClick}>ADD Data</IonButton>
            <IonButton onClick={updateData}>Update data</IonButton>
            
        </IonPage>
    );
}

// function AddData(){
    
//     const [student,setStudent] = useState(data);
//     const [id,setId]=useState("");
//     const [name,setName]=useState("");
//     const [age,setAge]=useState("");
//     const [native,setNative]=useState("");
  
//     const handleClick = () =>{
//       const newData = {
//         id,
//         name,
//         age,
//         native,
//       }
  
//       setStudents([...students,newData])
//       setId("")
//       setName("")
//       setAge("")
//       setNative("")
//     }
//       return(
//           <IonPage>
//                  <IonHeader>
//              <IonToolbar>
//                <IonTitle>
//              Add Data
//                </IonTitle>
//              </IonToolbar>
//             </IonHeader>
//               <IonList>
//                 <IonItem>
//                   <IonLabel>
//                     ID:
//                   </IonLabel>
//                     <IonInput placeholder="Enter your id"
//                     value={id}
//                     onIonChange={(event)=> setId(event.detail.value)}
//                     >
  
//                     </IonInput>
//                 </IonItem>
//                 <IonItem>
//                   <IonLabel>
//                     NAME:
//                   </IonLabel>
//                     <IonInput placeholder="Enter your name"
//                     value={name}
//                     onIonChange={(event)=> setName(event.detail.value)}
//                     >
  
//                     </IonInput>
//                 </IonItem>
//                 <IonItem>
//                   <IonLabel>
//                     AGE:
//                   </IonLabel>
//                     <IonInput placeholder="Enter your age"
//                     value={age}
//                     onIonChange={(event)=> setAge(event.detail.value)}
//                     >
  
//                     </IonInput>
//                 </IonItem>
//                 <IonItem>
//                   <IonLabel>
//                     NATIVE:
//                   </IonLabel>
//                     <IonInput placeholder="Enter your native"
//                     value={native}
//                     onIonChange={(event)=> setNative(event.detail.value)}
//                     >
  
//                     </IonInput>
//                 </IonItem>
//               </IonList>
//               <IonButton onClick={handleClick}>Default</IonButton>
//           </IonPage>
  
  
//       )
//   }
  
export default GetData;