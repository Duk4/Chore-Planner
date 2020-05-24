import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../assets/styles.js';
import ListItem from '../components/ListItem';
import PlusButton from '../components/PlusButton';
import navigationHandler from '../utils/navigationHandler';

export default function Lists({ navigation }) {
    const lists = [
        {
            "title": "Send cards",
            "body": "Send cards to family and friends",
            "date": "2019-11-09",
        },
        {
            "title": "Buy milk",
            "body": "Buy milk at the store",
            "date": "2019-11-10",
        },
        {
            "title": "Buy cookies",
            "body": "Buy cookies at the store",
            "date": "2019-11-11",
        },
        {
            "title": "Talk to Mike",
            "body": "Call Mike to prepare for Christmas dinner",
            "date": "2019-11-12",
        },
        {
            "title": "Buy gifts",
            "body": "Buy toys for the kids",
            "date": "2019-11-13"
        },
        {
            "title": "Send cards",
            "body": "Send cards to family and friends",
            "date": "2019-11-09",
        },
        {
            "title": "Buy milk",
            "body": "Buy milk at the store",
            "date": "2019-11-10",
        },
        {
            "title": "Buy cookies",
            "body": "Buy cookies at the store",
            "date": "2019-11-11",
        },
        {
            "title": "Talk to Mike",
            "body": "Call Mike to prepare for Christmas dinner",
            "date": "2019-11-12",
        },
        {
            "title": "Buy gifts",
            "body": "Buy toys for the kids",
            "date": "2019-11-13"
        },
        {
            "title": "Send cards",
            "body": "Send cards to family and friends",
            "date": "2019-11-09",
        },
        {
            "title": "Buy milk",
            "body": "Buy milk at the store",
            "date": "2019-11-10",
        },
        {
            "title": "Buy cookies",
            "body": "Buy cookies at the store",
            "date": "2019-11-11",
        },
        {
            "title": "Talk to Mike",
            "body": "Call Mike to prepare for Christmas dinner",
            "date": "2019-11-12",
        },
        {
            "title": "Buy gifts",
            "body": "Buy toys for the kids",
            "date": "2019-11-13"
        }
    ];
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
                return <ListItem list={list} key={index} />;
            })
        )
    }

    return (
        <View style={styles.lists}>
            <PlusButton style={styles.plusBoxTop} navigationHandler={() => { navigationHandler(navigation, 'NewItem') }} />
            <View style={styles.listsContainer}>{render}</View>
        </View>
    )
};