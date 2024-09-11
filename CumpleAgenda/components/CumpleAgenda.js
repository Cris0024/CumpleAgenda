import React from 'react';
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Alert } from 'react-native';

// Componente para mostrar un recordatorio de cumpleaños
const Recordatorio = ({ nombre, fecha, tipo, onLongPress }) => {
  return (
    <TouchableOpacity
      style={[styles.recordatorio, styles[tipo]]}
      onLongPress={onLongPress}
    >
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.fecha}>
        {tipo === 'hoy' ? 'Hoy Cumpleaños' : fecha}
      </Text>
    </TouchableOpacity>
  );
};

// Componente principal
const CumpleAgenda = ({ personas, eliminarPersona }) => {
  const hoy = new Date();
  const añoActual = hoy.getFullYear();

  // Función para clasificar el recordatorio según la fecha
  const clasificarRecordatorios = (persona) => {
    const fechaCumple = new Date(persona.fechaCumpleaños);
    fechaCumple.setFullYear(añoActual);

    if (fechaCumple.toDateString() === hoy.toDateString()) {
      return { tipo: 'hoy', fecha: 'Hoy Cumpleaños' };
    }

    if (fechaCumple < hoy) {
      return { tipo: 'pasado', fecha: fechaCumple.toDateString() };
    }

    return { tipo: 'futuro', fecha: fechaCumple.toDateString() };
  };

  // Función para manejar la eliminación
  const handleLongPress = (persona) => {
    Alert.alert(
      'Eliminar Contacto',
      `¿Estás seguro de que deseas eliminar a ${persona.nombre}?`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => eliminarPersona(persona.email), // Utiliza el email como identificador
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={personas}
        keyExtractor={(item) => item.email} // Usando email como key
        renderItem={({ item }) => {
          const { tipo, fecha } = clasificarRecordatorios(item);
          return (
            <Recordatorio
              nombre={item.nombre}
              fecha={fecha}
              tipo={tipo}
              onLongPress={() => handleLongPress(item)}
            />
          );
        }}
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5'
  },
  recordatorio: {
    padding: 16,
    marginVertical: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  hoy: {
    backgroundColor: '#DFF0D8',
  },
  pasado: {
    backgroundColor: '#F2DEDE',
  },
  futuro: {
    backgroundColor: '#D9EDF7',
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  fecha: {
    fontSize: 16,
  }
});

export default CumpleAgenda;
