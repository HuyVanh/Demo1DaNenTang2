// index.js

import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './Header';
import Wrapper from './Wrapper';
import TextInput from './TextInput';
import { name as appName } from './app.json';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name='Header' component={Header} />
                <Stack.Screen options={{ headerShown: false }} name='Wrapper' component={Wrapper} />
                <Stack.Screen options={{ headerShown: false }} name='TextInput' component={TextInput}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

AppRegistry.registerComponent(appName, () => MyStack);
