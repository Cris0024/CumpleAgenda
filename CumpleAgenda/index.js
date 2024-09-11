import { AppRegistry } from 'react-native';
import App from './App'; // Ajusta la ruta si tu App.js está en una subcarpeta
import { name as appName } from './app.json'; // Asegúrate de que app.json esté en la raíz del proyecto

AppRegistry.registerComponent(appName, () => App);
