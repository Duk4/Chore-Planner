import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/styles';
import ShoppingItemIcon from './ShoppingItemIcon';
import ListItemButton from './ListItemButton';

const ShoppingItem = ({ item, navigationHandler }) => {
    return (
        <View style={styles.listItem}>
            <View>
                <Text style={styles.shoppingItemTitle}>{item.title}</Text>
                <View style={styles.shoppingItemInfo}>
                    <Text style={styles.shoppingItemIcons}><ShoppingItemIcon name="weight" /> {item.amount + item.measure}</Text>
                    <Text style={styles.shoppingItemIconsMargin}><ShoppingItemIcon name="price" /> {item.price + item.currency}</Text>
                </View>
            </View>
            <View style={styles.listItemButtons}>
                <ListItemButton name="square-edit-outline" style={styles.listItemButtonsMargin} navigationHandler={navigationHandler} />
                <ListItemButton name="delete" style={styles.listItemButtonsMargin} />
            </View>
        </View>
    );
};

export default ShoppingItem;