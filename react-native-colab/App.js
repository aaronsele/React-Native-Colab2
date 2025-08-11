import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import ProfileCard from './ProfileCard';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <ProfileCard
          name="Sarobe Francis"
          title="Desarrollador Mobile"
          description="Apasionado por la tecnología y el desarrollo de apps móviles con React Native."
          image="https://randomuser.me/api/portraits/men/1.jpg"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
