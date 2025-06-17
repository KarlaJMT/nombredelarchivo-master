import { StyleSheet, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput, Button, Icon, Text } from "react-native-paper"
import { useNavigation } from '@react-navigation/native';
import { estadoLoginGlobal } from '../../context/contextData';

export default function ScreenLogin() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const rutas = useNavigation();
    const { login } = useContext(estadoLoginGlobal);
    const [verpw, setVerpw] = useState(true); // para ocultar o mostrar contraseña

    const handlelogin = async () => {
        if(email == '' || password == '') {
            alert('Atención.', 'Rellenar los campos.')
        } else {

        }
    }


    return (
        <View style={{ padding: 10, flex: 1, justifyContent: "center" }}>
            <Text variant="displayLarge" style={{ textAlign: 'center', marginBottom: 15 }}>Login</Text>
           
            
            <TextInput label="Email" value={email} onChangeText={() => setEmail} style={{ marginTop: 10 }} keyboardType="email-address" left={<TextInput.Icon icon="account"/>}>

            </TextInput>

            <TextInput label="Password" value={password} /*secureTextEntry={verpw}
            right={<TextInput.Icon icon="eye" onPress={() => setVerpw(!verpw)}/>} */ onChangeText={() => setPassword}
            left={<TextInput.Icon icon="key"/>}>


            </TextInput>

            <Button style={{ marginTop: 10 }} icon="login" mode="text" onPress={handlelogin}>
                Login
            </Button>

            <Button
                style={{ marginTop: 10 }}
                icon="account-plus"
                mode="outlined"
                onPress={() => rutas.navigate('crearcuenta')}>
                Crear Cuenta
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({})