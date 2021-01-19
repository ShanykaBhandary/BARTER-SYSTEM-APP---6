import * as React from 'react'
import {Text,View,StyleSheet}from 'react-native'
import{createStackNavigator} from 'react-navigation-stack'
import BookDonateScreen from '../screens/BookDonateScreen'
import ReceiverDetails from '../screens/ReceiverDetails'
export const AppStackNavigator=createStackNavigator({
    BookDonateScreen:{screen:BookDonateScreen,
    navigationOptions:{
       headerShown:false

    }
    },
    ReceiverDetails:{screen:ReceiverDetails,
    navigationOptions:{
        headerShown:false

    }
   }},
    {intialRouteName:'BookDonateScreen'}
)