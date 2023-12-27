import { StyleSheet, Text, Image, View, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { icons, FONTS } from '../constants'

const LayoutScreen = ({ title, goBack, children }) => {
    return (
        <>
            <View style={styles.container}>
                <StatusBar backgroundColor={"#f9ca24"} barStyle={'dark-content'} />
                <View style={styles.header}>
                    <TouchableOpacity style={{
                        position: "absolute",
                        left: 15,
                    }} onPress={() => goBack?.()}>
                        <Image style={styles.iconLeft} source={icons.arrow_left} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>{title}</Text>
                </View>
                {children}
            </View>
        </>
    )
}

export default LayoutScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    header: {
        backgroundColor: "#f9ca24",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    },
    textHeader: {
        fontSize: 22,
        fontWeight: "600",
        color: "white"
    },
    iconLeft: {
        width: 25,
        height: 25,
        tintColor: "white"
    }
})