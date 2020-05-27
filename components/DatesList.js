import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/styles';
import ListItemButton from './ListItemButton';

const DatesList = ({ date, navigationHandler }) => {
    return (
        <View style={styles.listItem}>
            <View>
                <Text style={styles.dateItemText}>{date.title}</Text>
                <Text style={styles.dateItemText}>Type: {date.type}</Text>
                <Text style={styles.dateItemText}>{date.date}</Text>
            </View>
            <View style={styles.listItemButtons}>
                <ListItemButton name="square-edit-outline" style={styles.listItemButtonsMargin} navigationHandler={navigationHandler} />
                <ListItemButton name="delete" style={styles.listItemButtonsMargin} />
            </View>
        </View>
    );
};

export default DatesList;