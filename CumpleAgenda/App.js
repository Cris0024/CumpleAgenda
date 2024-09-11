import React from 'react';
import AuthNavigator from '../navigation/AuthNavigator';
import AuthProvider from '../context/AuthContext'; 

const App = () => {
  return (
    <AuthProvider>
      <AuthNavigator />
    </AuthProvider>
  );
};

export default App;

