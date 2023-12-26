import React, { useState } from "react";
import {
    FlatList, View, TextInput, Button, Text, Dimensions, Image, TouchableOpacity, Alert
    , Platform, 
} from "react-native";
import Modal from "react-native-modal";
import { TextButton } from "../../components";
import { SIZES, COLORS, icons, FONTS } from "../../constants";

const ThemSanPham = () => {

    

    return (

        <View
            style={{

            }}
        >
            <View style={{
                backgroundColor: "white",
                flexDirection: 'column',
                borderColor: COLORS.primary,
                borderWidth: 2,
                //  borderRadius: 20,
                marginTop: 10
            }}
            >
                <TextInput style={{
                    width: '100%',
                    marginLeft: 10,
                }}
                    placeholder="Tên Sản Phẩm"
                />
            </View>
            <View
                style={{
                    backgroundColor: "white",
                    flexDirection: 'column',
                    borderColor: COLORS.primary,
                    borderWidth: 2,
                    marginTop: 10,
                    // borderRadius: 20,
                }}
            >
                <TextInput style={{
                    width: '100%',
                    marginLeft: 10,
                }}
                    placeholder="Giá Tiền"
                />
            </View>
            <View
                style={{
                    backgroundColor: "white",
                    flexDirection: 'column',
                    borderColor: COLORS.primary,
                    borderWidth: 2,
                    marginTop: 10,
                    // borderRadius: 20,
                }}
            >
                <TextInput style={{
                    width: '100%',
                    marginLeft: 10,
                }}
                    placeholder="Đơn vị "
                />
            </View>

            
            <View
                style={{
                    backgroundColor: "white",
                    flexDirection: 'column',
                    borderColor: COLORS.primary,
                    borderWidth: 2,
                    marginTop: 10,
                    // borderRadius: 20,
                }}
            >
                <TextInput style={{
                    width: '100%',
                    marginLeft: 10,
                }}
                    placeholder="Ghi Chú"
                />
            </View>
            <TextButton
                label="Cập nhật"

                buttonContainerStyle={{
                    height: 55,
                    alignItems: 'center',
                    marginHorizontal: 50,
                    boderRadius: SIZES.radius,
                    marginTop: SIZES.padding,
                    backgroundColor: COLORS.primary
                }}

            />

        </View>

    )
}

export default ThemSanPham;


