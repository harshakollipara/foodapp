import { StyleSheet } from 'react-native';
import { baseTheme } from '../../../styles/baseTheme';

export const style = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'transparent'
    },
    wrapper: {
        flexGrow: 1,
        height: baseTheme.dimensions.heights.buttons,
        overflow: 'hidden',
    },
    button: {
        marginHorizontal:baseTheme.dimensions.marginHorizontal.buttonstyleLogin,
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: baseTheme.colors.primary.blue,
        borderRadius:baseTheme.dimensions.borderRadiuses.buttons
    },
    outline: {
        backgroundColor: baseTheme.colors.primary.azure,
        borderWidth: baseTheme.dimensions.borderWidths.buttons,
        borderColor: baseTheme.colors.primary.blue,
    },
    text: {
        fontFamily: baseTheme.fonts.button.fontFamily,
        fontSize: baseTheme.fonts.button.fontSize,
        color: baseTheme.colors.primary.azure,
        textTransform: 'uppercase',
    },
    textOutline: {
        fontFamily: baseTheme.fonts.button.fontFamily,
        fontSize: baseTheme.fonts.button.fontSize,
        color: baseTheme.colors.primary.blue,
    },
    disabled: {
        opacity: baseTheme.decorations.opacity.disabledButtons,
    },
    hidden: {
        display: 'none',
    },
});
