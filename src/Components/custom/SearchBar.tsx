import React from 'react';
import { View, TextInput } from 'react-native';
import { SearchBarStyle } from '../commons/components.style';
import Feather from 'react-native-vector-icons/Feather'

interface searchBarProps {
    onTermChange: any,
}

const SearchBar = ({ onTermChange, }: searchBarProps) => {
    return (
        <View style={SearchBarStyle.backgroundStyle}>
            <Feather name="search" style={SearchBarStyle.iconsStyle} />
            <TextInput
                style={SearchBarStyle.inputStyle}
                placeholder="Search"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={onTermChange}
            />
        </View>
    );

}

export default SearchBar;