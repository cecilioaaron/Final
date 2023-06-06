import { initializeApp } from "firebase/app";
import { IPokemon } from "../interfaces/IPokemon";
import { nanoid } from "nanoid";
import firebaseConfig from "./Firebaseconfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";

export const app = initializeApp(firebaseConfig)
export const db = getFirestore()

export const newPokedex = async (data: IPokemon) =>{
    try{
        console.log('Insertando en el FB el objeto', data)
        const newData = {codigo: nanoid(20), ...data}
        const docRef = doc(db, "Pokedex", newData.codigo);
        await setDoc(docRef, newData);
    }catch(error){
        console.log(error)
    }
}