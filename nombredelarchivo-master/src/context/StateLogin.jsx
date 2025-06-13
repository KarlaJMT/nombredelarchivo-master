import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { estadoLoginGlobal } from "./contextData";

export default function StateLogin({ children }) {

    const [perfil, setPerfil] = useState();
    const [islogin, setIslogin] = useState(false);

// función flecha
    const login = () => {
        setIslogin(true);
    }

    const outlogin = () => {
        setIslogin(false);
    }


  return (
    <estadoLoginGlobal.Provider value={{perfil,islogin, login, outlogin}}>
        { children }
    </estadoLoginGlobal.Provider>
  )
}