import React from "react";
import {
   View,
   Text,
   textInput
} from 'react-native';

import { FONTS, SIZES, COLORS } from "../constants";
import { TextInput } from "react-native-gesture-handler";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
const FormInput = ({
   containerStyle,
   label,
   placeholder,
   inputStyle,
   prependComponent,
   appendComponent,
   onChange,
   secureTextEntry,
   keyboardType = "default",
   autoCompleteType = "off",
   autoCapitalize = "none",
   errorMsg = ""
}) => {
   return (
      <View style={{ ...containerStyle }}>
         {/*Label & Error mgs */}
         <View
            style={{
               flexDirection: 'row',
               justifyContent: 'space-between',
               alignItems : 'center'
            }}
         >
            <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
               {label}</Text>
            <Text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</Text>
         </View>


         {/* Text input */}
         <View
            style={{
               flexDirection: 'row',
               justifyContent: 'space-between',
               height: 55,
               paddingHorizontal: SIZES.padding,
               marginTop: SIZES.base,
               borderRadius: SIZES.radius,
               backgroundColor: COLORS.lightGray2

            }}
         >
            {prependComponent}
            <GestureHandlerRootView>
               <TextInput
                  style={{
                     flex: 1,
                     ...inputStyle
                  }}
                  placeholder={placeholder}
                  placeholderTextColor={COLORS.gray}
                  secureTextEntry={secureTextEntry}
                  keyboardType={keyboardType}
                  autoCompleteType={autoCompleteType}
                  autoCapitalize={autoCapitalize}
                  onChangeText={(text) => onChange(text)}
               />
               </GestureHandlerRootView>
            {appendComponent}

         </View>


      </View>

   )

}
export default FormInput;