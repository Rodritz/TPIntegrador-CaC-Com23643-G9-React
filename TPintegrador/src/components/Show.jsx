/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase.js"

import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
const mySwal = withReactContent(Swal)

export const Show = () => {

    // Configurar useState (hook)
    const [tragos, setTragos] = useState([])
    // Referenciar a la base de datos de firebase
    const tragosCollection = collection(db, "tragos")
    // Funcion para mostrar todos los documentos
    const getTragos = async () => {
        const data = await getDocs(tragosCollection)
        /* console.log(data.docs); */
        setTragos(
            data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
    }
    // Funcion para eliminar un documento
    const deleteTragos = async (id) => {
        const tragosDoc = doc(db, "tragos", id)
        await deleteDoc(tragosDoc)
    }

    // Funcion para sweetalert2 (confirmar/eliminar documento)
    const confirmDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteTragos(id)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    // Use Effect
    useEffect(() => {
        getTragos()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="d-grid gap-2">
                            <Link to="/create" className="btn btn-secondary">CREAR</Link>
                        </div>

                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th>NOMBRE</th>

                                    <th>INGREDIENTES</th>
                                    <th>INSTRUCCIONES</th>
                                    <th>CATEGORIA</th>
                                    <th>ACCIONES</th>
                                </tr>
                            </thead>

                            <tbody>

                                {tragos.map((trago) => (
                                    <tr>
                                        <td>{trago.nombre}</td>
                                        <td>{trago.ingredientes}</td>
                                        <td>{trago.instrucciones}</td>
                                        <td>{trago.categoria}</td>
                                        <td>
                                            <Link to={`/show/edit/${trago.id}`} className="btn btn-light">
                                                <i className="fa-sharp fa-solid fa-pencil"></i>
                                            </Link>                      
                                            <button className="btn btn-danger" onClick={() => confirmDelete(trago.id)}>
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                )

                                )}



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )

};