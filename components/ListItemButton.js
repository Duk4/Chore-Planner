import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ListItem = ({ name, style }) => {
    return (
        <TouchableOpacity onPress={() => { console.log(name) }} style={style}>
            <MaterialCommunityIcons name={name} size={20} color="#2c2d2e" />
        </TouchableOpacity>
    );
};

export default ListItem;