import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import firebaseConfig from "./Firebaseconfig";
import { ICategoria } from "../interfaces/ICategoria";
import { nanoid } from 'nanoid'
import Datos from './Datos/Datos.json'
import { IPokemon } from "../interfaces/IPokemon";
import { newPokedex } from "./FBPokemon";
import { IPokemonPokedex } from "../interfaces/IPokedex";


export const app = initializeApp(firebaseConfig)
export const db = getFirestore()
export const getCategorias = async ():Promise<ICategoria[]> => {
    let categorias: ICategoria[] = []; //array inicializado al vacio
    // const categoriasRef = collection(useFirestore(), "Categorias") //seleccionamos la coleccion categorias
    const categoriasRef = collection(db, "Pokedex"); //seleccionamos la coleccion categorias
    const CategoriasDocs = await getDocs(categoriasRef) //obtengo todos los datos, es como un select *
    CategoriasDocs.forEach(doc => {
        const categoria = { ...doc.data() }
        categorias.push(categoria as ICategoria)
    });
    console.log(categorias);
    return categorias;
}

export const getDatos = async ():Promise<ICategoria[]> => {
    let categorias: ICategoria[] = []; //array inicializado al vacio
    // const categoriasRef = collection(useFirestore(), "Categorias") //seleccionamos la coleccion categorias
    const categoriasRef = collection(db, "Pokedex"); //seleccionamos la coleccion categorias
    const CategoriasDocs = await getDocs(categoriasRef) //obtengo todos los datos, es como un select *
    CategoriasDocs.forEach(doc => {
        const categoria = { ...doc.data() }
        categorias.push(categoria as ICategoria)
    });
    console.log(categorias);
    return categorias;
}
export const newCategoria = async (data: ICategoria) => {
    try{
        console.log('Insertando en FB el objeto', data)
        const newData = {codigo: nanoid(20), ...data}
        const docRef = doc(db, "Pokedex", newData.codigo);
        await setDoc(docRef, newData);
    }catch(error){
        console.log(error)
    }
}

// carga masiva
export const cargarprod = async () => {
    // try {
    //     console.log('carga de datos...');
    //     Datos.map(async (Datos) => {
    //         const codigo = nanoid(20);
    //         const docRef = doc(db, "Pokemon", codigo);
    //         await setDoc(docRef, { codigo: codigo, ...Datos});
    //         window.location.reload();
    //     });
    // } catch (error) {
    //     console.log(error);
    // }
    console.log('datos,,,')
    fetch('https://pokeapi.co/api/v2/pokemon?limit=721')
      .then(res => res.json())
      .then(res => res.results)
      .then(res => {
        res.map ( (poke: any, index: number) => {
            const urlImgPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/${index+1}.png`
            const urlPokemon = `https://pokeapi.co/api/v2/pokemon/${index+1}`
            fetch (urlPokemon)
                .then (res => res.json())
                .then( (pokemon:IPokemonPokedex) => {
                const pokemonFB: IPokemon = {
                    name: pokemon.name,
                    imagen: pokemon.sprites.front_default,
                    especie: pokemon.species.name,
                    tipo: pokemon.types[0].type.name
                } 
                newPokedex(pokemonFB)        
                })
            
        })

      })
    

};