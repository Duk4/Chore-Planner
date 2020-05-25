import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/styles';
import ListItemButton from './ListItemButton';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ListItem = ({ list, navigationHandler }) => {
    const [check, toggleCheck] = useState(false);

    let checked = <ListItemButton name="checkbox-blank-outline" />;

    if (check === true) {
        checked = <ListItemButton name="check" />;
    };

    return (
        <View style={styles.listItem}>
            <View style={styles.listItemInfo}>
                <TouchableOpacity onPress={() => { toggleCheck(!check) }}>
                    {checked}
                </TouchableOpacity>
                <Text style={styles.listItemText}>{list.title}</Text>
            </View>
            <View style={styles.listItemButtons}>
                <ListItemButton name="square-edit-outline" style={styles.listItemButtonsMargin} navigationHandler={navigationHandler} />
                <ListItemButton name="delete" style={styles.listItemButtonsMargin} />
            </View>
        </View>
    );
};

export default ListItem;