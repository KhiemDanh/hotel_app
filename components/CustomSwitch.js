import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import { Switch } from 'react-native-switch';
import { FONTS, SIZES, COLORS } from "../constants";


const CustomSwitch = ({ value, onChange }) => {

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Switch
                value={value}
                onValueChange={(val) => onChange(!value)}
                disabled={false}
                activeText={'On'}
                inActiveText={'Off'}
                circleSize={15}
                barHeight={15}

                circleBorderWidth={3}
                backgroundActive={COLORS.primary}
                backgroundInactive={'gray'}
                circleActiveColor={'white'}
                circleInActiveColor={'#000000'}
                changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                renderActiveText={false}
                renderInActiveText={false}
            />
            { /*Text */}
            <Text
                style={{
                    color: value ? COLORS.primary : COLORS.gray,
                    marginLeft: SIZES.base,
                    ...FONTS.body4
                }}
            >
                Lưu lại cho lần sau
            </Text>
        </View>

    )
}
const styles = StyleSheet.create({
    switchOnContainer: {
        width: 40,
        height: 20,
        paddingRight: 2,
        justifyContent: 'center',
        alignItems: ' flex-end',
        boderRadius: 5,
        backgroundColor: COLORS.primary
    },
    switchOffContainer: {
        width: 40,
        height: 20,
        paddingRight: 2,
        justifyContent: 'center',
        boderWidth: 1,
        boderColor: COLORS.gray,
        boderRadius: 5
    },
    dot: {
        width: 12,
        height: 12,
        boderRadius: 6
    }


})

export default CustomSwitch;