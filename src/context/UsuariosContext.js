import React , { createContext, useState, useEffect} from 'react';
import Axios from 'axios'

export const UsuariosContext = createContext();

const UsuariosProvider = (props) => {

    const [usuarios, guardarUsuarios] = useState([]);

    useEffect (() =>{
            const obtenerUsuarios = async () => {
                const url = 'http://192.168.1.105:3004/usuarios';
                const usuarios = await Axios.get(url);
                guardarUsuarios(usuarios.data);
            }
            obtenerUsuarios();
    }, []);

    return (
        <UsuariosContext.Provider
        value={{
            usuarios
        }}>
            {props.children}
        </UsuariosContext.Provider>
    )

}

export default UsuariosProvider;