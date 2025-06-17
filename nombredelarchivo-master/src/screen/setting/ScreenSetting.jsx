import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { Button } from 'react-native-paper';
import { Avatar, Card, Icon } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { estadoGlobal, estadoLoginGlobal } from '../../context/contextData'; 

export default function ScreenSetting() {

  const { outlogin } = useContext(estadoLoginGlobal);

  return (
    <View style={{padding:10}}>
    
    
          <Card style={{padding:5, marginTop:10}}>
            <Text>
              ¿CERRAR SESIÓN?
            </Text>
            <Button icon="arrow-down" mode="outlined" onPress={outlogin}>Log Out</Button>
          </Card>
    
        </View>
  )
}

const styles = StyleSheet.create({})