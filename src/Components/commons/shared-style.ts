import { StyleSheet } from 'react-native';
import { baseTheme } from '../../styles/baseTheme';

export const sharedStyle = StyleSheet.create({
    container: {
        flexGrow: 1,
        height: baseTheme.dimensions.heights.formFields,
        justifyContent: 'center',
        marginTop: baseTheme.metrics.margins.formElements
    },
    wrapper: {
        flexGrow: 1,
        flexDirection: 'row',
        borderBottomWidth: baseTheme.dimensions.borderWidths.formFields,
        position: 'relative',
        marginHorizontal:baseTheme.dimensions.marginHorizontal.formtextInput
    },
    fieldActive: {
        borderColor: baseTheme.colors.primary.cyan,
    },
    fieldInactive: {
        borderColor: baseTheme.colors.primary.oracle,
    },
    textInput: {
        flexGrow: 1,
        flexBasis: 0,
        height: baseTheme.dimensions.heights.formFields,
        width : baseTheme.dimensions.widths.textInput,
        fontFamily: baseTheme.fonts.body.fontFamily,
        fontSize: baseTheme.fonts.body.fontSize,
        color: baseTheme.colors.primary.sherpa_blue,
        justifyContent: 'center',
    },
    textInputWithIcon: {
        flexGrow: 1,
        flex: 0.9,
        height: baseTheme.dimensions.heights.formFields,
        fontFamily: baseTheme.fonts.body.fontFamily,
        fontSize: baseTheme.fonts.body.fontSize,
        color: baseTheme.colors.primary.sherpa_blue,
        justifyContent: 'center',
    },
    textInputMargin: {
        marginLeft: 4
    },
    placeholder: {
        position: 'absolute',
        top: 11,
        fontFamily: baseTheme.fonts.body.fontFamily,
        fontSize: baseTheme.fonts.body.fontSize,
        color: baseTheme.colors.primary.oracle,
    },
    dateText: {
        position: 'absolute',
        top: 11,
        fontFamily: baseTheme.fonts.body.fontFamily,
        fontSize: baseTheme.fonts.body.fontSize,
        color: baseTheme.colors.primary.sherpa_blue,
    },
    label: {
        position: 'absolute',
        fontFamily: baseTheme.fonts.formFieldsLabel.fontFamily,
        fontSize: baseTheme.fonts.formFieldsLabel.fontSize,
        color: baseTheme.colors.primary.oracle,
    },
    labelHidden: {
        top: 16,
        fontFamily: baseTheme.fonts.formFieldsPlaceholder.fontFamily,
        fontSize: baseTheme.fonts.formFieldsPlaceholder.fontSize,
        color: baseTheme.colors.primary.oracle,
    },
    labelVisible: {
        top: -12,
    },
    labelActive: {
        color: baseTheme.colors.primary.cyan,
    },
    iconContainer: {
        height: baseTheme.dimensions.heights.formFields,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: baseTheme.metrics.paddings.containers,
    },
    icon: {
        fontSize: baseTheme.materialIcons.sizes.primary,
        color: baseTheme.colors.primary.cyan,
    },
});
