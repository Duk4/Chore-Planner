import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from '../assets/styles.js';

export default function HomeItem({ name, text, screen, navigation }) {
    return (
        <View style={styles.homeBox}>
            <FontAwesome name={name} size={24} />
            <Text style={styles.homeText}>{text}</Text>
        </View>
    );
};