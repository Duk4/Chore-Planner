import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
        backgroundColor: '#fff',
    },
    choiceContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    homeBox: {
        padding: 30,
        marginTop: 15,
        marginHorizontal: 20,
        fontSize: 24,
        fontWeight: 'bold',
        flexGrow: 1,
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
        marginTop: 30,
        alignItems: "center",
    },
});

export default styles;

  // #0D2740 #3AAED6 #0c2259 #bde9f8 #2c2d2e