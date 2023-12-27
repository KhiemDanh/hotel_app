import React from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
    QLTang,
    RoomDiagramScreen,
    ThemKhachHang,
    ThemSanPham
} from './screens'
import Home from "./screens/Home/Home";



const Stack = createNativeStackNavigator();

function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
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
                        options={{ headerShown: true, headerTitle: "Trang chủ" }}
                        component={Home}
                    />
                    <Stack.Screen
                        name="RoomDiagram"
                        // options={{ headerShown: true, headerTitle: "Sơ đồ phòng" }}
                        component={RoomDiagramScreen}
                    />
                    <Stack.Screen
                        name="ThemKhachHang"
                        options={{ headerShown: true, headerTitle: "Thêm Khách Hàng " }}
                        component={ThemKhachHang}
                    />
                    <Stack.Screen
                        name="ThemSanPham"
                        options={{ headerShown: true, headerTitle: "Thêm Sản Phẩm " }}
                        component={ThemSanPham}
                    />
                    <Stack.Screenr
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
        </GestureHandlerRootView>
    );

}

export default App;