import React from 'react';
import { Text, View } from 'react-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { styles } from '../assets/styles.js';

export default function Home() {
    return (
        <View style={styles.home}>
            <View style={styles.choiceContainer}>
                <View style={styles.homeBox}>
                    <FontAwesome name='balance-scale' size={24} />
                    <Text style={styles.homeText}>Week Planner</Text>
                </View>
                <View style={styles.homeBox}>
                    <AntDesign name='shoppingcart' size={24} />
                    <Text style={styles.homeText}>Shopping lists</Text>
                </View>
                <View style={styles.homeBox}>
                    <AntDesign name='calendar' size={24} />
                    <Text style={styles.homeText}>Important dates</Text>
                </View>
                <View style={styles.homeBox}>
                    <MaterialCommunityIcons name='format-list-bulleted' size={24} />
                    <Text style={styles.homeText}>To do lists</Text>
                </View>
            </View>
            <View style={styles.plusBox}>
                <AntDesign name='pluscircle' size={48} color='#E2474B' />
            </View>
        </View>
    );
};