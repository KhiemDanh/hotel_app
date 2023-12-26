import React from "react";


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from 'react-native-splash-screen';

import {
    OnBoarding,
    AuthLayout,
    SignIn,
    SignUp,
    ForgotPassword,
    Otp,
    QLTang
} from './screens'
import Home from "./screens/Home/Home";



const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen
                    name="OnBoarding"
                    component={OnBoarding}
                />
                <Stack.Screen
                    name="Home"
                    options={{headerShown: true, headerTitle: "Trang chủ"}}
                    component={Home}
                />
                <Stack.Screen
                    name="QLTang"
                    options={{headerShown: true, headerTitle: "Sơ đồ phòng"}}
                    component={QLTang}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />

                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />

                <Stack.Screen
                    name="Otp"
                    component={Otp}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );

}

export default App;