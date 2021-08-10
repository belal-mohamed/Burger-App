const validation = (cloneDataType, type) => {
    
    const checkNameValidation = (data) => {
        // let re = /^[a-z]+(\s[a-z]+){0,}+$/gi;
        return 0;
    };
    
    const checkPhoneValidation = (data) => {
        // let re = /^\d{6,11}$/gi;
        return 0;
    }
    
    const checkSpecialCharacters = (data, type) => {
       return 0
    };

    const checkWhiteSpace = (data) => {
        return data.indexOf(' ') >= 0;
    };

    switch (type) {
        case 'zip':
            if (cloneDataType.trim().length === 5 && !isNaN(cloneDataType)) {
                return {
                    valid: true,
                    errorMessage: 'Approved'
                }
            }
            else {
                return {
                    valid: false,
                    errorMessage: 'Invalid Zip'
                }
            }
        case 'name':
            if (checkNameValidation(cloneDataType)) {
                return {
                    valid: true,
                    errorMessage: 'Approved'
                }
            }
            else {
                return {
                    valid: false,
                    errorMessage: 'Name Is Invalid'
                }
            }
        case 'tel':
            if (checkPhoneValidation(cloneDataType)) {
                return {
                    valid: true,
                    errorMessage: 'Approved'
                }
            }
            else {
                return {
                    valid: false,
                    errorMessage: 'Invalid Number'
                }
            }
        case 'address':
            if (checkSpecialCharacters(cloneDataType, 'address')) {
                return {
                    valid: false,
                    errorMessage: 'Address Must Be Without Special Characters'
                }
            }
            else if (checkWhiteSpace(cloneDataType)) {
                return {
                    valid: false,
                    errorMessage: 'Words must be separated by tag - only'
                }
            }
            else if (cloneDataType.trim().length > 7) {
                return {
                    valid: true,
                    errorMessage: 'Approved'
                }
            }
            else {
                return {
                    valid: false,
                    errorMessage: 'Address Must Be More Specific'
                }
            }
        case 'city':
            if (
                cloneDataType.trim().length >= '3' 
                && isNaN(cloneDataType) 
                && !checkSpecialCharacters(cloneDataType, 'city')
                &&!checkWhiteSpace(cloneDataType)) {
                return {
                    valid: true,
                    errorMessage: 'Approved'
                }
            }
            else {
                return {
                    valid: false,
                    errorMessage: 'Invalid City'
                }
            }
        default:
            return false
    }
};

export default validation;

