import React, { Profiler } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// Llamar componentes de Login.
import ScreenLogin from "./screen/login/ScreenLogin";
import ScreenCrearCuenta from "./screen/login/ScreenCrearCuenta";

// Llamar a las pantallas principales.

import ScreenAcercaDe from "./screen/about/ScreenAcercaDe";
import ScreenHome from "./screen/home/ScreenHome";
import ScreenSetting from "./screen/setting/ScreenSetting";

// Llamar los screen hijos Home.

import LucesCasa from "./screen/home/LucesCasa";
import DetallesCasa from "./screen/home/DetallesCasa";
import PuertasCasa from "./screen/home/PuertasCasa";

//

function MyStackHome() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="menu" component={ScreenHome} />
            <Stack.Screen name="lucescasa" component={LucesCasa} />
            <Stack.Screen name="puertacasa" component={PuertasCasa} />
            <Stack.Screen name="detallescasa" component={DetallesCasa} />
        </Stack.Navigator>
    )
}

function MyStackLogin() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="login" component={ScreenLogin} />
            <Stack.Screen name="crearcuenta" component={ScreenCrearCuenta} />
            
        </Stack.Navigator>
    )
}

function MyDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="dash" component={MyStackHome}
            options={{
                title:"Menu",
                headerShown: true,
                tabBarIcon:({color,size})=>
                    (<FontAwesome name="home" size={24} color={color} />)
            }
            } />
            <Drawer.Screen name="notificaciones" component={MyStackHome} />
            <Drawer.Screen name="perfil" component={MyStackHome} />
            <Drawer.Screen name="setting" component={MyStackHome} />
        </Drawer.Navigator>
    )
}



function Mytabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={MyStackHome} options={{
                title: "Menu",
                headerShown: true,
                tabBarIcon:({color,size})=>(<FontAwesome name="home" size={24} color={color} />),
                tabBarLabelPosition:"beside-icon",
                tabBarBadge:2,
                tabBarBadgeStyle:{
                    color:"white",
                    backgroundColor:"blue"
                },
            }}/>

            <Tab.Screen name="about" component={ScreenAcercaDe} options={{
                title: "About",
                headerShown: true,
                tabBarIcon:({color,size})=>(<FontAwesome name="user" size={24} color={color} />),
                tabBarLabelPosition:"beside-icon",
                tabBarBadge:5,
                tabBarBadgeStyle:{
                    color:"white",
                    backgroundColor:"blue"
                },
            }}/>

            <Tab.Screen name="setting" component={ScreenSetting} options={{
                title: "Settings",
                headerShown: true,
                tabBarIcon:({color,size})=>(<FontAwesome name="cog" size={24} color={color} />),
                tabBarLabelPosition:"beside-icon",
                tabBarBadge:0,
                tabBarBadgeStyle:{
                    color:"white",
                    backgroundColor:"blue"
                },
            }}/>
        </Tab.Navigator>
    )
}

export default function Navegacion () {
    return (
        // <Mytabs/>
        // <MyStackLogin/>
        <MyDrawer/>
    )
}