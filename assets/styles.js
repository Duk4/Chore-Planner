import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#0c2259',
        height: 70,
        paddingTop: 30,
        paddingBottom: 10,
        paddingHorizontal: 30
    },
    home: {
        flex: 1,
    },
    choiceContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    homeBox: {
        padding: 30,
        marginTop: 20,
        marginHorizontal: 20,
        flexDirection: 'row',
        backgroundColor: '#bde9f8',
        borderRadius: 20,
        alignItems: 'center',
    },
    homeText: {
        color: '#2c2d2e',
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 30,
    },
    plusBox: {
        position: 'absolute',
        bottom: 50,
        alignSelf: "center",
    },
    plusBoxTop: {
        alignSelf: 'center',
        marginTop: 10
    },
    noLists: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 250,
        textAlign: 'center',
    },
    noListsText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    lists: {
        flex: 1,
        backgroundColor: '#fff'
    },
    listsContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 5
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: '5%',
        marginVertical: 5,
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 10,
        backgroundColor: '#bde9f8'
    },
    listItemInfo: {
        flexDirection: "row",
        justifyContent: 'flex-start'
    },
    listItemText: {
        fontWeight: 'bold',
        color: '#2c2d2e',
        marginLeft: 10,
    },
    listItemButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listItemButtonsMargin: {
        marginLeft: 10
    },
    dateItemText: {
        fontWeight: 'bold',
        color: '#2c2d2e'
    }
});

  // #0c2259 #bde9f8 #2c2d2e