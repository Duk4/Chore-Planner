import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from '../assets/styles';
import { MaterialIcons } from '@expo/vector-icons';

const ListItem = ({ name }) => {
    return (
        <TouchableOpacity onPress={() => { console.log(name) }} style={styles.listItemButtonsMargin}>
            <MaterialIcons name={name} size={20} color="#2c2d2e" />
        </TouchableOpacity>
    );
};

export default ListItem;