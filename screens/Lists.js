import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../assets/styles.js';
import PlusButton from '../components/PlusButton';

export default function Lists() {
    const lists = [];
    let render;

    if (lists.length === 0) {
        render = (
            <View style={styles.noLists}>
                <Text style={styles.noListsText}>No lists found...</Text>
            </View>
        )
    } else {
        render = (
            lists.map((list, index) => {
                return (
                    <TouchableOpacity key={index}>
                        <View>
                            <Text>{list}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })
        )
    }

    return (
        <View style={styles.lists}>
            {render}
            <PlusButton />
        </View>
    )
};