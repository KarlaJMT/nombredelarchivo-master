import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { Button } from 'react-native-paper';
import { Avatar, Card, Icon } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { estadoGlobal, estadoLoginGlobal } from '../../context/contextData'; 



export default function ScreenHome() {

  const rutas = useNavigation();
  
  // traer el estado global
  const { sumar, restar, contador } = useContext(estadoGlobal);
  console.log(contador);
  const { outlogin } = useContext(estadoLoginGlobal);

  return (
    <View style={{padding:10}}>

      <Card style={{padding:5, marginTop:10}}>
        <Icon
          source="lightbulb"
          color={'purple'}
          size={20}
        />
        <Button icon="arrow-down" mode="outlined" onPress={()=>rutas.push('lucescasa')}>Press me</Button>
      </Card>

      <Card style={{padding:5, marginTop:10}}>
        <Icon
          source="door"
          color={'purple'}
          size={20}
        />
        <Button icon="arrow-down" mode="outlined" onPress={()=>rutas.push('puertacasa')}>Press me</Button>
      </Card>

      <Card style={{padding:5, marginTop:10}}>
        <Text>
          Total: {contador}
        </Text>
        <Button icon="arrow-down" mode="outlined" onPress={sumar}>Sumar</Button>
        <Button icon="arrow-down" mode="outlined" onPress={restar}>Restar</Button>
      </Card>

    </View>
  )
}

const styles = StyleSheet.create({})