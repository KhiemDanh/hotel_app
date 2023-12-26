import React, { useState } from "react";
import { FlatList, View, TextInput, Button, Text, Dimensions, Image, TouchableOpacity, Alert } from "react-native";
import Modal from "react-native-modal";
import { TextButton } from "../../components";
import {
    FormInput, CustomSwitch

} from "../../components"
import { SIZES, COLORS, icons, FONTS } from "../../constants";


const width = Dimensions.get("window").width;

const QLTang = ({ navigation }) => {

    const [danhSachTang, setDanhSachTang] = useState([
        {
            id: 1,
            tang: 1,
        },
        {
            id: 2,
            tang: 2,
        },
        {
            id: 3,
            tang: 3,
        }
    ]);
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const addRoom = () => {

        setDanhSachTang([...danhSachTang, {
            id: danhSachTang[danhSachTang.length - 1].id + 1,
            tang: danhSachTang[danhSachTang.length - 1].id + 1,
        }])
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                ListHeaderComponent={() => {
                    return (
                        <View
                            style={{
                                width: '100%',
                                backgroundColor: "white",
                                flexDirection: 'row',
                                justifyContent: "space-between",
                                alignItems: 'center',
                                borderColor: COLORS.primary,
                                borderWidth: 2,
                                borderRadius: 20,
                                marginTop: 10,
                                paddingHorizontal: 15,

                            }}
                        >
                            <Image source={icons.search} style={{
                                width: 30,
                                height: 30,
                                tintColor: COLORS.primary
                            }} />
                            <TextInput style={{
                                width: '100%',
                                marginLeft: 10,
                            }}
                                placeholder="Tìm kiếm Tầng"
                            />
                        </View>)
                }}


                data={danhSachTang}

                renderItem={({ item }) => {
                    return (
                        <TextButton
                            label={`Tầng ${item.tang}`}
                            buttonContainerStyle={{
                                height: 155,
                                width: 155,
                                alignItems: 'center',
                                boderRadius: SIZES.radius,
                                backgroundColor: COLORS.primary
                            }}
                          onPress={() => navigation.navigate("Home", {id : item.id})}
                        />
                    );
                }}
                columnWrapperStyle={{
                    marginTop: SIZES.padding,
                    marginHorizontal: 30,
                    justifyContent: 'space-between',
                }}
                numColumns={2}
                keyExtractor={(item) => item.id}
            />
            <TouchableOpacity style={{
                position: 'absolute',
                bottom: 30,
                right: 30,
            }}
                onPress={addRoom}
            >
                <Image source={icons.add} style={{
                    width: 50,
                    height: 50,
                    tintColor: COLORS.blue
                }} />
            </TouchableOpacity>
            {/* <Modal isVisible={isModalVisible}>
                <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column', justifyContent: "space-between" }}>
                    <View>
                        <TextInput style={{
                            width: '100%',
                            marginLeft: 10,
                        }}
                            placeholder="Tìm kiếm Tầng"
                        />
                        <TextInput style={{
                            width: '100%',
                            marginLeft: 10,
                        }}
                            placeholder="Tìm kiếm Tầng"
                        />
                        <TextInput style={{
                            width: '100%',
                            marginLeft: 10,
                        }}
                            placeholder="Tìm kiếm Tầng"
                        />
                    </View>

                    <View style={{
                        width: "100%",
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        paddingHorizontal: 15,
                        paddingVertical: 20,
                    }}>
                        <TouchableOpacity style={{
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            backgroundColor: COLORS.primary,
                            width: 80,
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginRight: 20,
                        }}
                            onPress={toggleModal}
                        >
                            <Text style={{
                                ...FONTS.h3
                            }}>Hủy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            paddingHorizontal: 15,
                            paddingVertical: 10,
                            backgroundColor: COLORS.primary,
                            width: 80,
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                            onPress={toggleModal}
                        >
                            <Text style={{
                                ...FONTS.h3
                            }}>Thêm</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </Modal> */}
        </View >

    );
}


export default QLTang;
