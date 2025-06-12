import { StyleSheet, View } from 'react-native'
import React from 'react'
import { TextInput, Button, Icon, Text } from "react-native-paper"
import { useNavigation } from '@react-navigation/native';

export default function ScreenLogin() {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const rutas = useNavigation();


    return (
        <View style={{ padding: 10, flex: 1, justifyContent: "center" }}>
            <Text variant="displayLarge" style={{ textAlign: 'center', marginBottom: 15 }}>Login</Text>
            <TextInput label="Email" value={email} onChangeText={() => setEmail} style={{ marginTop: 10 }} keyboardType="email-address">

            </TextInput>

            <TextInput label="Password" value={password} onChangeText={() => setPassword} secureTextEntry>

            </TextInput>

            <Button style={{ marginTop: 10 }} icon="login" mode="text" onPress={() => rutas.navigate('login')}>
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