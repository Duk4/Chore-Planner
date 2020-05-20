import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/styles';
import ListItemButton from './ListItemButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListItem = ({ list }) => {
    const [check, toggleCheck] = useState(false);
    let checked;

    if (check === true) {
        checked = <ListItemButton name="check" />;
    };

    return (
        <TouchableOpacity onPress={() => { toggleCheck(!check) }}>
            <View style={styles.listItem}>
                <Text style={styles.listItemText}>{list.title}</Text>
                <View style={styles.listItemButtons}>
                    {checked}
                    <ListItemButton name="edit" />
                    <ListItemButton name="delete" />
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ListItem;