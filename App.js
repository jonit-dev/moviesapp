import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import Home from "./src/components/pages/Home";
import About from "./src/components/pages/About";
import HomeIconWithBadge from "./src/components/common/HomeIconWithBadge";
import NowPlaying from "./src/components/pages/NowPlaying/NowPlaying";
import MovieList from "./src/components/pages/MovieList/MovieList";
import Search from "./src/components/pages/Search/Search";


class App extends Component {

    // state = {key:value};

    render() {
        return (
            <View></View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
        NowPlaying: NowPlaying,
        MovieList: MovieList,
        Search: Search

    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'NowPlaying') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                    IconComponent = HomeIconWithBadge;
                } else if (routeName === 'MovieList') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    IconComponent = HomeIconWithBadge;
                }
                else if (routeName === 'Search') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    IconComponent = HomeIconWithBadge;
                }


                // You can return any component that you like here!
                return <IconComponent name={iconName} size={25} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);


export default createAppContainer(TabNavigator);
