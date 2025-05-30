import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons, Entypo, Feather } from '@expo/vector-icons';

import SaldoScreen from '../screens/SaldoScreen';
import RedeScreen from '../screens/RedeScreen';
import AbastecerScreen from '../screens/AbastecerScreen';
import SuporteScreen from '../screens/SuporteScreen';
import UsuarioScreen from '../screens/UsuarioScreen';
import LoginScreen from '../screens/LoginScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#ccc',
          tabBarStyle: {
            backgroundColor: '#000',
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontSize: 11,
          },
        }}
      >
        <Tab.Screen
          name="Saldo"
          component={SaldoScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="currency-usd" size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Rede"
          component={RedeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="location-pin" size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Abastecer"
          component={AbastecerScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="smartphone" size={22} color={color} />
            ),
            tabBarLabel: 'Abastecer Ma...',
          }}
        />
        <Tab.Screen
          name="Suporte"
          component={SuporteScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="help-circle" size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Usuário"
          component={UsuarioScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={22} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Feather name="user" size={22} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
