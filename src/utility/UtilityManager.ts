/**
 * UtilityManager for all utility function.
 * the unique singleton instance.
 */
import ObjectValidation from './Validation/ObjectValidation';
import UIValidation from './Validation/UIValidation';


export default class UtilityManager {
    //object Validation instance
    public static objectValidationInstance: ObjectValidation = new ObjectValidation();

    //UI Validation instance
    public static uiValidationInstance: UIValidation = new UIValidation();

    public constructor() {

    }

}