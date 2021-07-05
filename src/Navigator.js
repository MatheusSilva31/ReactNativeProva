import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Dashboard from './Screens/Dashboard'
import DefaultCards from './Screens/DefaultCards'
import PricingTable from './Screens/PricingTable'
import ContentBlock from './Screens/ContentBlock'
import Forms from './Screens/Forms'
import Menu from './Components/Menu'

const menuConfig = {
    initialRouteName: "Dashboard",
    contentComponent: Menu,
    contentOptions: {
        labelStyles: {
            fontWeight: "normal",
            fontSize: 40,
        },
        activeLabelStyle: {
            color: "purple",
            fontWeight: "bold",
        },
    },
};

const menuRoutes = {
    Dashboard,
    DefaultCards,
    PricingTable,
    ContentBlock,
    Forms,

    
}

const menuNavigator = createDrawerNavigator(menuRoutes,menuConfig)
export default createAppContainer(menuNavigator)













