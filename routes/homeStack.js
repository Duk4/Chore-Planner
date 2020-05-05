import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Lists from '../screens/Lists';
import Planner from '../screens/Planner';
import ShoppingLists from '../screens/ShoppingLists';
import ImportantDates from '../screens/ImportantDates';

const screens = {
    Home: {
        screen: Home
    },
    Planner: {
        screen: Planner
    },
    ShoppingLists: {
        screen: ShoppingLists
    },
    ImportantDates: {
        screen: ImportantDates
    },
    Lists: {
        screen: Lists
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);