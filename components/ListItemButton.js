import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ListItemButton = ({ name, style, navigationHandler }) => {
    return (
        <TouchableOpacity onPress={() => { navigationHandler() }} style={style}>
            <MaterialCommunityIcons name={name} size={20} color="#2c2d2e" />
        </TouchableOpacity>
    );
};

export default ListItemButton;