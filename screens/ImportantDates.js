import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/styles.js';
import DatesList from '../components/DatesList';
import PlusButton from '../components/PlusButton';
import navigationHandler from '../utils/navigationHandler';

const ImportantDates = ({ navigation }) => {
    const dates = [
        {
            "title": "Milan Tomažič",
            "type": "chilling",
            "date": "2020-05-28",
        },
        {
            "title": "Dragan Miljković",
            "type": "party",
            "date": "2020-05-29",
        },
        {
            "title": "Maja Slater",
            "type": "birthday",
            "date": "2020-05-30",
        },
        {
            "title": "I wanna",
            "type": "romantic",
            "date": "2020-05-12",
        },
        {
            "title": "Buy laptop",
            "type": "business",
            "date": "2020-05-13"
        },
        {
            "title": "Buy meds",
            "type": "medical",
            "date": "2020-05-15"
        },
        {
            "title": "Call Sally",
            "type": "date",
            "date": "2020-05-31"
        }
    ];

    let render;
    if (dates.length === 0) {
        render = (
            <View style={styles.noLists}>
                <Text style={styles.noListsText}>No dates found...</Text>
                <PlusButton style={styles.plusBox} navigationHandler={() => { navigationHandler(navigation, 'NewItem') }} />
            </View>
        );
    } else {
        render = (
            dates.map((date, index) => {
                return <DatesList date={date} key={index} navigationHandler={() => { navigationHandler(navigation, 'EditItem') }} />;
            })
        );
    };

    return (
        <View style={styles.lists}>
            <PlusButton style={styles.plusBoxTop} navigationHandler={() => { navigationHandler(navigation, 'NewItem') }} />
            <View style={styles.listsContainer}>{render}</View>
        </View>
    )
};

export default ImportantDates;