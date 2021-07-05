import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Home from './Screens/Home'
import Tela1 from './Screens/Tela1'
import Tela2 from './Screens/Tela2'
import Menu from './Components/Menu'

const menuConfig = {
    initialRouteName: "Home",
    contentComponent: Menu,
    contentOptions: {
        labelStyles: {
            fontWeight: "normal",
            fontSize: 20,
        },
        activeLabelStyle: {
            color: "red",
            fontWeight: "bold",
        },
    },
};

const menuRoutes = {
    Home,
    Tela1,
    Tela2,
    
}

const menuNavigator = createDrawerNavigator(menuRoutes,menuConfig)
export default createAppContainer(menuNavigator)













