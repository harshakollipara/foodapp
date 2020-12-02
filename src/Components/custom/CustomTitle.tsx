import React from 'react';
import { Image } from 'react-native';

function CustomTitle() {
    return (
        <Image
            style={{ width: 60, height: 50 }}
            source={require('../../Components/images/mcd_logo.png')}
        />
    );
}

export default CustomTitle;