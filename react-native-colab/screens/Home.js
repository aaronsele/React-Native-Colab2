
import React from 'react';
import { View, Text, StyleSheet, Button, Linking } from 'react-native';
import Counter from '../components/Counter';

export default function Home({ navigation }) {
  const abrirGoogle = () => {
    Linking.openURL('https://www.google.com');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla de Inicio</Text>
      <Counter />
      <Button title="Ir a Perfiles" onPress={() => navigation.navigate('Perfiles')} />

      {/* Botón sorpresa */}
      <View style={{ marginTop: 20 }}>
        <Button title="🔍 Abrir Google" onPress={abrirGoogle} color="#FF5733" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
