import { db } from "./firebase-cfg.js";
import { collection, addDoc } from "firebase/firestore"
import perguntasJson from  "../perguntas.json"
// armazenando a importação do "perguntasJson" no vetor perguntas.
const perguntas = perguntasJson;

//Organizando e inserindo TODOS os índices do vetor perguntas na coleção "perguntas" do banco Firestore .
perguntas.forEach(function(obj){
    try {
         addDoc(collection(db,"perguntas"), {
            id: obj.id,
            pergunta: obj.pergunta,
            opcoes: obj.opcoes
        }).then(function(docRef) {
            console.log("Document written with ID: ",docRef.id);
        })
    } 
    catch (e) {
        console.error("Error adding document: ", e);
    }
});








