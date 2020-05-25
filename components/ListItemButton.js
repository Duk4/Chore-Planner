import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ListItemButton = ({ name, style, navigationHandler }) => {
    let buttonRender = (
        <TouchableOpacity onPress={() => { console.log(name) }} style={style}>
            <MaterialCommunityIcons name={name} size={20} color="#2c2d2e" />
        </TouchableOpacity>
    );

    if (navigationHandler) {
        buttonRender = (
            <TouchableOpacity onPress={() => { navigationHandler() }} style={style}>
                <MaterialCommunityIcons name={name} size={20} color="#2c2d2e" />
            </TouchableOpacity>
        );
    };

    return buttonRender;
};

export default ListItemButton;