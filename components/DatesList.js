import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import { styles } from '../assets/styles';
import ListItemButton from './ListItemButton';
import DateTypeIcon from './DateTypeIcon';

const DatesList = ({ date, navigationHandler }) => {
    return (
        <View style={styles.listItem}>
            <View style={styles.dateItem}>
                <DateTypeIcon name={date.type} />
                <View style={styles.dateItemInfo}>
                    <Text style={styles.dateItemText}>{date.title}</Text>
                    <Text style={styles.dateItemText}>{moment(date.date).format('ll')}</Text>
                </View>
            </View>
            <View style={styles.listItemButtons}>
                <ListItemButton name="square-edit-outline" style={styles.listItemButtonsMargin} navigationHandler={navigationHandler} />
                <ListItemButton name="delete" style={styles.listItemButtonsMargin} />
            </View>
        </View>
    );
};

export default DatesList;