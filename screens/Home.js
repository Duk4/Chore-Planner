import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../assets/styles.js';
import HomeItem from '../components/HomeItem';

const items = [
    { screen: 'Planner', name: 'balance-scale', text: 'Week Planner' },
    { screen: 'ShoppingLists', name: 'shopping-cart', text: 'Shopping lists' },
    { screen: 'ImportantDates', name: 'calendar', text: 'Important dates' },
    { screen: 'Lists', name: 'list-ul', text: 'To do lists' },
];

export default function Home({ navigation }) {
    const pressHandler = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <View style={styles.home}>
            <View style={styles.choiceContainer}>
                {
                    items.map((item, index) => {
                        return (
                            <TouchableOpacity onPress={() => { pressHandler(item.screen) }}>
                                <HomeItem screen={item.screen} name={item.name} text={item.text} key={index} />
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
            <TouchableOpacity onPress={}>
                <View style={styles.plusBox}>
                    <AntDesign name='pluscircle' size={48} color='#E2474B' />
                </View>
            </TouchableOpacity>
        </View>
    );
};