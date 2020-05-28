import React from 'react';
import { MaterialCommunityIcons, FontAwesome5, Entypo } from '@expo/vector-icons';

const DateTypeIcon = ({ name }) => {
    let icon = <MaterialCommunityIcons name="calendar" size={20} color="#2c2d2e" />;

    if (name === 'party') {
        icon = <Entypo name="drink" size={20} color="#2c2d2e" />;
    } else if (name === 'birthday') {
        icon = <FontAwesome5 name="birthday-cake" size={20} color="#2c2d2e" />;
    } else if (name === 'romantic') {
        icon = <MaterialCommunityIcons name="heart" size={20} color="#2c2d2e" />;
    } else if (name === 'business') {
        icon = <MaterialCommunityIcons name="briefcase" size={20} color="#2c2d2e" />;
    } else if (name === 'medical') {
        icon = <MaterialCommunityIcons name="medical-bag" size={20} color="#2c2d2e" />;
    } else if (name === 'chilling') {
        icon = <MaterialCommunityIcons name="sunglasses" size={20} color="#2c2d2e" />;
    }

    return icon;
};

export default DateTypeIcon;