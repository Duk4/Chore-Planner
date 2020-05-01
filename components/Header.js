import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../styles.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.header}>
            <Image source={require('../assets/icon2.png')} style={{ width: 30, height: 30 }} />
            <MaterialCommunityIcons name='home' size={30} color='#FFFFFF' />
        </View>
    );
};