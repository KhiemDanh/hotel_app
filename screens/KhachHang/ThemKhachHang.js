import React, { useState } from "react";
import {
    FlatList, View, TextInput, Button, Text, Dimensions, Image, TouchableOpacity, Alert
    , Platform, 
} from "react-native";
import Modal from "react-native-modal";
import { TextButton } from "../../components";
import { SIZES, COLORS, icons, FONTS } from "../../constants";
import DateTimePicker from '@react-native-community/datetimepicker';
import { RadioButton } from 'react-native-paper';

const ThemKhachHang = () => {

    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [textInputValue, setTextInputValue] = useState('');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios'); // For iOS, show the picker in a modal
        setDate(currentDate);
        setTextInputValue(formatDate(currentDate));
    };

    const showPicker = () => {
        setShow(true);
    };

    const formatDate = (date) => {
        // Customize the date format based on your needs
        return `   Ngày Sinh: ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} `;
    };

    const [selectedGender, setSelectedGender] = useState('');

    const genders = ['Nam', 'Nữ',];


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
                    placeholder="Tên Khách Hàng"
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
                    placeholder="Số căn cước"
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
                    placeholder="Điện Thoại "
                />
            </View>

            <View
                style={{
                    backgroundColor: "white",
                    flexDirection: 'column',
                    borderColor: COLORS.primary,
                    borderWidth: 2,
                    marginTop: 10,
                }}
            >
                <Text>    Giới tính:</Text>
                {genders.map((gender, index) => (
                    <View key={index} style={{
                        flexDirection: 'row',
                        alignItems: 'center',

                    }}>
                        <RadioButton
                            value={gender}
                            status={selectedGender === gender ? 'checked' : 'unchecked'}
                            onPress={() => setSelectedGender(gender)}
                        />
                        <Text>{gender}</Text>
                    </View>
                ))}

            </View>

            <View>
                <TextInput
                    placeholder="   Ngày sinh"
                    value={textInputValue}
                    onFocus={showPicker}
                    editable={false} // Make the TextInput read-only
                    style={{
                        backgroundColor: "white",
                        flexDirection: 'column',
                        borderColor: COLORS.primary,
                        borderWidth: 2,
                        marginTop: 10,

                    }}

                />
                <Button onPress={showPicker}
                    title="Nhập ngày sinh"


                />
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="datetime"
                        is24Hour={true}
                        display="default"
                        onChange={onChange}

                    />
                )}
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
                    placeholder="Địa chỉ"
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

export default ThemKhachHang;


