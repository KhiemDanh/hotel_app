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
    FormInput, CustomSwitch

} from "../../components"
import { TextButton } from '../../components';



const SignIn = ({ navigation }) => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")
    const [showPass, setShowPass] = React.useState(false)
    const [saveMe, setSaveMe] = React.useState(false)

    function isEnableSignIn() {
        return email != "" && password != "" && emailError == ""
    }

    return (
        <AuthLayout
            title="Xin chào,"
            subtitle=" Hãy đăng nhập ứng dụng"

        >
            <View
                style={{
                    flex: 1,
                    marginTop: SIZES.padding
                }}
            >
                {/*Form Input */}
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
                                    icons.correct : icons.cancel
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
                    label="Mật khẩu"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{
                        marginTop: SIZES.radius
                    }}
                    onChange={(value) => setPassword(value)}
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
                {/*Save me & Forgot Password */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.radius,
                        justifyContent: 'space-between'
                    }}
                >
                    <CustomSwitch
                        value={saveMe}
                        onChange={(value) => setSaveMe(value)}
                    />

                    <TextButton
                        label="Quên mật khẩu?"
                        buttonContainerStyle={{
                            backgroundColor: null
                        }}
                        labelStyle={{

                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                        onPress={() => navigation.navigate("ForgotPassword")}

                    />


                </View>

                {/*Sign In */}
                <TextButton
                    label="Đăng nhập"
                    disable={isEnableSignIn() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        boderRadius: SIZES.radius,
                        marginTop: SIZES.padding,
                        backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.transparentPrimary
                    }}

                />
                {/*Sign Up */}
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
                       Bạn không có tài khoản? 
                    </Text>

                    <TextButton
                        label=" Đăng ký"
                        buttonContainerStyle={{
                            marinLeft: 3,
                            backgroundColor: null
                        }}
                        labelStyle={{

                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.navigate("SignUp")}


                    />

                </View>
            </View>

        </AuthLayout>
    )
}

export default SignIn;