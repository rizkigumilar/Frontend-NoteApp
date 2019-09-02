import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import React, { Component } from 'react'


import Home from '../../screens/Home'
import SideBar from '../../components/SideBar';
import Avatar from '../../components/Avatar'
import Sort from '../../components/Sort'
import SingleNotes from '../../screens/EditScreen'
import AddNotes from '../../screens/AddNotes'



const StackNavigation = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerLeft: <Avatar />,
            headerRight: <Sort />,
            headerTitle: "Note App"
        }
    },
    SingleNotes: {
        screen: SingleNotes,
        navigationOptions: {
            header: null
        }
    },
    AddNotes: {
        screen: AddNotes,
        navigationOptions: {
            header: null
        }
    }
})

const MainNavigation = createDrawerNavigator({
    StackNavigation
}, {
        contentComponent: SideBar,
        drawerBackgroundColor: 'rgba(255,255,255,.9)',
        overlayColor: 'transparent',
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: 'white',
        },
    })

export default createAppContainer(createSwitchNavigator(
    {
        App: MainNavigation,
    }

))