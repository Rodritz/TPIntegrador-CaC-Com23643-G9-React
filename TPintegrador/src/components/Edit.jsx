import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase.js";


export const Edit = () => {

const [nombre, setNombre] = useState("")
const [ingredientes, setIngredientes] = useState("")
const [instrucciones, setInstrucciones] = useState("")
const [categoria, setCategoria] = useState("")

const navigate = useNavigate();

const {id} = useParams();

const update = async(e) => {
    e.preventDefault();
    const tragoDoc = doc (db, "tragos", id);

    const data = {
        nombre: nombre,
        ingredientes: ingredientes,
        instrucciones: instrucciones,
        categoria: categoria
    };

    await updateDoc (tragoDoc, data)
    navigate ("/show") //en la de tragos poner /show

    const getTragosById = async (id) =>{
        const tragoDoc = await getDoc (doc(db, "tragos", id));

        if (tragoDoc.exists()){
            setNombre(tragoDoc.data().nombre);
            setIngredientes(tragoDoc.data().ingredientes);
            setInstrucciones(tragoDoc.data().instrucciones);
            setCategoria(tragoDoc.data().categoria);
        }else{
            alert("No existe el dato");
        }
    }
};

    // Use Effect
    useEffect(() => {
        getTragosById(id);
    }, []);

    return (
        <h1>Aca se van a editar los documentos</h1>
    )


}