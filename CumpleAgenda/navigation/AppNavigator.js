import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native';
import HomeScreen from '../screens/HomeScreen'; // Asegúrate de que la ruta sea correcta
import ProfileScreen from '../screens/ProfileScreen'; // Asegúrate de que la ruta sea correcta
import { AuthContext } from '../context/AuthContext'; // Manejo del contexto de autenticación

const Drawer = createDrawerNavigator();

function AppNavigator() {
  const { logout } = useContext(AuthContext); // No es necesario pasar `user` aquí si no lo usas

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerRight: () => (
            <Button onPress={logout} title="Cerrar Sesión" />
          ),
        }}
      />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default AppNavigator;

