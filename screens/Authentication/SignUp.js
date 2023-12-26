import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { AuthLayout } from "../";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import utils from '../../utils/Utils';
import {
    FormInput, TextIconButton

} from "../../components"
import { TextButton } from '../../components';
import { useNavigation } from '@react-navigation/native';


const SignUp = ({ navigation }) => {
    const [email, setEmail] = React.useState("")
    const [userName, setuserName] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [showPass, setShowPass] = React.useState(false)

    const [userNameError, setuserNamelError] = React.useState("")
    const [passwordError, setpasswordError] = React.useState("")
    const [emailError, setEmailError] = React.useState("")

    function isEnableSignUp () {
        return email != "" && password != ""  && userName != "" && emailError==""
        &&passwordError==""&& userNameError == ""
    }
    return (
        <AuthLayout
            title="Bắt đầu "
            subtitle=" Hãy tạo tài khoản để tiếp tục!"
            titleContainerStyle={{
                marginTop: SIZES.radius
            }}
        >

            {/* Form Input and SignUp */}

            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding
                }}
            >
                <FormInput
                    label=" Email"
                    keyboardType="email-address"
                    autoCompleteType="email"
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        // value email
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={email == "" || (email != "" && emailError == "") ?
                                    icons.correct
                                    : icons.cancel
                                }
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: email == "" ?
                                        COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red
                                }}
                            />

                        </View>
                    }

                />

                <FormInput
                    label=" Họ Tên"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        setuserName(value)
                    }}
                    errorMsg={userNameError}
                    appendComponent={
                        <View
                            style={{
                                justifyContent: 'center'
                            }}
                        >
                            <Image
                                source={userName == "" || (userName != "" && userNameError == "") ?
                                    icons.correct
                                    : icons.cancel
                                }
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: userName == "" ?
                                        COLORS.gray : (userName != "" && userNameError == "") ? COLORS.green : COLORS.red
                                }}
                            />
                        </View>
                    }

                />
                <FormInput
                    label=" Mật khẩu"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => {
                        utils.validatePassword(value, setpasswordError)
                        setPassword(value)
                    }}
                    errorMsg={passwordError}
                    appendComponent={
                        <TouchableOpacity
                            style={{
                                width: 40,
                                alignItems: 'flex-end',
                                justifyContent: 'center'
                            }}
                            onPress={() => setShowPass(!showPass)}
                        >
                            <Image
                                source={showPass ? icons.eye_close :
                                    icons.eye}
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.gray
                                }}

                            />
                        </TouchableOpacity>
                    }
                />
{/* Sign Up && Sign In */}
<TextButton
label="Đăng ký"
disable={ isEnableSignUp () ? false : true}
buttonContainerStyle={{
    height: 55,
    alignItems: 'center',
    boderRadius: SIZES.radius,
    marginTop: SIZES.padding,
    backgroundColor: isEnableSignUp ()? COLORS.primary : COLORS.transparentPrimary

}}
onPress={ isEnableSignUp () ? () => navigation.navigate("Otp") : null} 

/>
<View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.darkGray,
                            ...FONTS.body3
                        }}
                    >
                       Bạn đã có tài khoản?
                    </Text>

                    <TextButton
                        label=" Đăng nhập"
                        buttonContainerStyle={{
                            marinLeft: 3,
                            backgroundColor: null
                        }}
                        labelStyle={{

                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.goBack()}


                    />

                </View>


            </View>
            {/* Footer */}

        </AuthLayout>
    )
}

export default SignUp;