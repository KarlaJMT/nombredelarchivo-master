import { View, Text } from 'react-native';
import React from 'react';
import { estadoGlobal } from './contextData';

export default function StateGlobal({ children }) {

    // contador
    const [contador, setContador] = React.useState(5);

    // suma
    const sumar = () => {
        setContador(contador + 1);
    }

    // resta
    const restar = () => {
        setContador(contador - 1);
    }

  return (
    <estadoGlobal.Provider value={{contador, sumar, restar}}>
        { children }
        {/* <Text>
          Total: {contador}
        </Text> */}
    </estadoGlobal.Provider>
  )
}