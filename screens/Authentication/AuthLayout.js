import React from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';

import { images, FONTS, SIZES, COLORS } from "../../constants";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const AuthLayout = ({ title, subtitle, titleContainerStyle, children }) => {
  return (
    <View style={{
      flex: 1,
      // paddingVertical: SIZES.padding,
      backgroundColor: COLORS.white,
    }}>

<KeyboardAwareScrollView
keyboardDismissMode="on-drag"
contentContainerStyle={{
flex:1,
paddingHorizontal: SIZES.padding

}}
>
     {/*App icon */}
<View
style={{
  alignItems: 'center'
  
}}
>
<Image
source={images.logo_02}
resizeMode= "contain"
style={{
  height: 120,
  width: 250,
  tintColor: COLORS.primary
}}
/>

</View>

{ /* Title & subtitle*/}
<View
style ={{
marginTop: SIZES.padding,
...titleContainerStyle

}}
>
<Text
style={{
textAlign: 'center',
...FONTS.h2

}}
>
{title}

</Text>
<Text
style={{
  textAlign: 'center',
  color: COLORS.darkGray,
  marginTop: SIZES.base,
  ...FONTS.body3
  
  }}
>
  {subtitle}
</Text>
</View>

{ /* Conten/ children */}
{children}

</KeyboardAwareScrollView>
    </View>
  );
};

export default AuthLayout;
