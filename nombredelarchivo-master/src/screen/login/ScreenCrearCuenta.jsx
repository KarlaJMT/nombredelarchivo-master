import { StyleSheet, View } from 'react-native';
import React from 'react';
import { TextInput, Button, Icon, Text } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

export default function ScreenCrearCuenta() {
    const [nombre, setNombre] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const rutas = useNavigation();


    return (
        <View style={{ padding: 10, flex: 1, justifyContent: "center" }}>
            <Text variant="displayLarge" style={{ textAlign: 'center', marginBottom: 15 }}>Crear Cuenta</Text>

            <TextInput
                label="Nombre"
                value={nombre}
                onChangeText={(text) => setNombre(text)}
                style={{ marginTop: 10 }}/>

            <TextInput
                label="Email"
                value={email}
                onChangeText={() => setEmail}
                style={{ marginTop: 10 }}
                keyboardType="email-address" />

            <TextInput 
            label="Password" 
            value={password} 
            onChangeText={() => setPassword} 
            style={{ marginTop: 10 }}
            secureTextEntry />

            <Button
                style={{ marginTop: 10 }}
                icon="account-plus"
                mode="outlined"
                onPress={() => rutas.push('login')}>
                Ir a login
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({})