import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles.js';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Chores Planner</Text>
        </View>
    );
};