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
        alignSelf: "center"
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
    }
});

  // #0D2740 #3AAED6 #0c2259 #bde9f8 #2c2d2e