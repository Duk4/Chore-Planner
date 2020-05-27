import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { styles } from '../assets/styles.js';
import HomeItem from '../components/HomeItem';
import PlusButton from '../components/PlusButton';
import navigationHandler from '../utils/navigationHandler';

const items = [
    { screen: 'Planner', name: 'balance-scale', text: 'Week Planner' },
    { screen: 'ShoppingLists', name: 'shopping-cart', text: 'Shopping lists' },
    { screen: 'ImportantDates', name: 'calendar', text: 'Important dates' },
    { screen: 'Lists', name: 'list-ul', text: 'To do lists' },
];

const Home = ({ navigation }) => {
    return (
        <View style={styles.home}>
            <View style={styles.choiceContainer}>
                {
                    items.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => { navigationHandler(navigation, item.screen) }}>
                                <HomeItem screen={item.screen} name={item.name} text={item.text} />
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
            <PlusButton style={styles.plusBox} navigationHandler={() => { navigationHandler(navigation, 'NewItem') }} />
        </View>
    );
};

export default Home;