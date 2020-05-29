import React from 'react';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

const ShoppingItemIcon = ({ name }) => {
    let icon = <MaterialCommunityIcons name="weight" size={20} color="#2c2d2e" />;

    if (name === 'price') {
        icon = <Entypo name="price-tag" size={20} color="#2c2d2e" />;
    };

    return icon;
};

export default ShoppingItemIcon;