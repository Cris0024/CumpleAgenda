import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Alert, DatePickerIOS, Platform, DatePickerAndroid, Button } from 'react-native';

const contact = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [fechaCumpleaños, setFechaCumpleaños] = useState(new Date());

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || fechaCumpleaños;
    setFechaCumpleaños(currentDate);
  };

  const handleSubmit = () => {
    if (nombre === '' || apellido === '' || email === '' || telefono === '') {
      Alert.alert('Error', 'Por favor, complete todos los campos.');
      return;
    }

    onSubmit({ nombre, apellido, email, telefono, fechaCumpleaños });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <Text style={styles.label}>Apellido:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el apellido"
        value={apellido}
        onChangeText={setApellido}
      />
      <Text style={styles.label}>Correo Electrónico:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Número de Teléfono:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingrese el número de teléfono"
        value={telefono}
        onChangeText={setTelefono}
        keyboardType="phone-pad"
      />
      <Text style={styles.label}>Fecha de Cumpleaños:</Text>
      {Platform.OS === 'ios' ? (
        <DatePickerIOS
          date={fechaCumpleaños}
          onDateChange={handleDateChange}
        />
      ) : (
        <Button
          title={fechaCumpleaños.toDateString()}
          onPress={async () => {
            try {
              const { action, year, month, day } = await DatePickerAndroid.open({
                date: fechaCumpleaños,
                mode: 'date'
              });
              if (action !== DatePickerAndroid.dismissedAction) {
                setFechaCumpleaños(new Date(year, month, day));
              }
            } catch (error) {
              console.warn('Error al abrir el selector de fecha:', error);
            }
          }}
        />
      )}
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Guardar Datos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#F5F5F5'
  },
  label: {
    fontSize: 18,
    marginVertical: 8,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    marginBottom: 16
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 5
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 18
  }
});

export default contact;
