export default class ObjectValidation {
    public constructor() {
    }
    //Check object is null, undefined
    public isValid(objectValue : any) {
        return objectValue !== null && typeof objectValue !== 'undefined';
    }

    //Check array is not empty
    public isArrayNonEmpty(objectValue : any) {
        return this.isValid(objectValue) && objectValue.length > 0;
    }

    //Check valid string and type
    public isStringValid(objectValue : any) {
        return this.isValid(objectValue) && typeof objectValue === 'string';
    }

    //Check valid string and empty
    public isStringEmpty(stringValue : any) {
        return this.isStringValid(stringValue) && stringValue.trim() === '';
    }

    public getStringSafely(stringValue : any) {
        return this.isStringValid(stringValue) ? stringValue : '';
    }

    public isNumberValid(numberValue : any) {
        return (
            this.isValid(numberValue) &&
            typeof numberValue === 'number' &&
            !isNaN(numberValue)
        );
    }

    public getNumberSafely(numberValue : any) {
        return this.isNumberValid(numberValue) ? numberValue : 0;
    }

    public isBooleanValid(booleanValue : any) {
        return this.isValid(booleanValue) && typeof booleanValue === 'boolean';
    }

    public getBooleanSafely(booleanValue : any) {
        return this.isBooleanValid(booleanValue) ? booleanValue : false;
    }

}