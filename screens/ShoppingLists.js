import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/styles.js';
import ShoppingItem from '../components/ShoppingItem';
import PlusButton from '../components/PlusButton';
import navigationHandler from '../utils/navigationHandler';

const ShoppingLists = ({ navigation }) => {
    const shoppingLists = [
        {
            "title": "Kamen",
            "amount": "50",
            "measure": "lbs",
            "price": "20",
            "currency": "$",
            "date": "2020-05-28",
        },
        {
            "title": "Marihuana",
            "amount": "5",
            "measure": "oz",
            "price": "5",
            "currency": "$",
            "date": "2020-05-29",
        },
        {
            "title": "Spanać",
            "amount": "1000",
            "measure": "g",
            "price": "100",
            "currency": "din",
            "date": "2020-05-30",
        },
        {
            "title": "Spanać",
            "amount": "1000",
            "measure": "kg",
            "price": "100",
            "currency": "din",
            "date": "2020-05-30",
        },
        {
            "title": "Samsung A40",
            "amount": "1",
            "measure": "units",
            "price": "250",
            "currency": "€",
            "date": "2020-05-31",
        },
        {
            "title": "Udemy course",
            "amount": "1",
            "measure": "units",
            "price": "12",
            "currency": "$",
            "date": "2020-05-01",
        },
        {
            "title": "Water",
            "amount": "2.5",
            "measure": "l",
            "price": "80",
            "currency": "din",
            "date": "2020-05-02",
        },
        {
            "title": "Jaffa kolač",
            "amount": "1",
            "measure": "units",
            "price": "60",
            "currency": "din",
            "date": "2020-05-03",
        },
        {
            "title": "Laminat",
            "amount": "34",
            "measure": "m²",
            "price": "741.39",
            "currency": "din",
            "date": "2020-05-04",
        },
        {
            "title": "Ugalj",
            "amount": "10",
            "measure": "m³",
            "price": "7000",
            "currency": "din",
            "date": "2020-05-05",
        },
        {
            "title": "Žica",
            "amount": "16",
            "measure": "m",
            "price": "50",
            "currency": "din",
            "date": "2020-05-06",
        },
    ];

    let render;
    if (shoppingLists.length === 0) {
        render = (
            <View style={styles.noLists}>
                <Text style={styles.noListsText}>No dates found...</Text>
                <PlusButton style={styles.plusBox} navigationHandler={() => { navigationHandler(navigation, 'NewItem') }} />
            </View>
        );
    } else {
        render = (
            shoppingLists.map((item, index) => {
                return <ShoppingItem item={item} key={index} navigationHandler={() => { navigationHandler(navigation, 'EditItem') }} />;
            })
        );
    };

    return (
        <View style={styles.lists}>
            <PlusButton style={styles.plusBoxTop} navigationHandler={() => { navigationHandler(navigation, 'NewItem') }} />
            <View style={styles.listsContainer}>{render}</View>
        </View>
    );
};

export default ShoppingLists;