import Ionicons from 'react-native-vector-icons/Ionicons';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from "react-navigation";
import Home from "./src/pages/Home";
import About from "./src/pages/About";
import HomeIconWithBadge from "./src/components/common/HomeIconWithBadge";

class App extends Component {

    // state = {key:value};

    render() {
        return (
            <View>
                <Text> This is my app</Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
        Home: Home,
        About: About
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, horizontal, tintColor}) => {
                const {routeName} = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                    // Sometimes we want to add badges to some icons.
                    // You can check the implementation below.
                    IconComponent = HomeIconWithBadge;
                } else if (routeName === 'Settings') {
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
