import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../assets/styles';

export default function PlusButton() {
    return (
        <TouchableOpacity>
            <View style={styles.plusBox}>
                <AntDesign name='pluscircle' size={48} color='#E2474B' />
            </View>
        </TouchableOpacity>
    )
};