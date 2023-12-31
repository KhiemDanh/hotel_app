import React from 'react';
import {
    TouchableOpacity, Text,
} from 'react-native';
import { FONTS, COLORS, SIZES } from '../constants';

const TextButton = ({
    label,
    buttonContainerStyle,
    labelStyle,
    onPress,
    disabled
}) => {
    return (
        <TouchableOpacity

            style={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.radius,
                ...buttonContainerStyle
            }}
            disabled = {disabled}
            onPress={onPress}
        >
            <Text style={{
                color: COLORS.white,
                ...FONTS.h3,
                ...labelStyle

            }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};

export default TextButton;