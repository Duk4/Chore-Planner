import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function PlusButton({ navigationHandler, style }) {
    return (
        <TouchableOpacity onPress={() => { navigationHandler() }}>
            <View style={style}>
                <AntDesign name='pluscircle' size={48} color='#E2474B' />
            </View>
        </TouchableOpacity>
    )
};