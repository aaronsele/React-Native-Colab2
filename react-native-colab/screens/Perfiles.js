// screens/Perfiles.js
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ProfileCard from '../components/ProfileCard';

export default function Perfiles() {
  const perfiles = [
    {
      name: 'Pablo Polshu',
      description: 'Desarrollador React Native.',
      image: 'https://i.pravatar.cc/300?img=1',
    },
    {
      name: 'Angie Peña',
      description: 'Diseñadora UI/UX apasionada.',
      image: 'https://i.pravatar.cc/300?img=2',
    },
    {
      name: 'Jeni Goldfeld',
      description: 'Backend con Node.js y Express.',
      image: 'https://i.pravatar.cc/300?img=3',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {perfiles.map((perfil, index) => (
        <ProfileCard
          key={index}
          name={perfil.name}
          description={perfil.description}
          image={perfil.image}
          onPress={() => alert(`Perfil de ${perfil.name}`)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
  },
});
