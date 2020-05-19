import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../assets/styles';
import ListItemButton from './ListItemButton';

const ListItem = ({ list }) => {
    return (
        <TouchableOpacity>
            <View style={styles.listItem}>
                <Text style={styles.listItemText}>{list.title}</Text>
                <View style={styles.listItemButtons}>
                    <ListItemButton name="edit" />
                    <ListItemButton name="delete" />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ListItem;