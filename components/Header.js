import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Chores Planner</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0D2740',
        height: 60,
        paddingTop: 30,
        paddingHorizontal: 10
    },
    headerText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
    }
});