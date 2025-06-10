import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.avatar} 
        source={{ uri: 'https://avatars.githubusercontent.com/u/162629023?v=4' }} 
      />
      <Text style={styles.name}>Anna Leme</Text>
      <Text style={styles.email}>anna.leme@email.com</Text>
      <Text style={styles.bio}>
        Desenvolvedora apaixonada por React Native. Gosto de criar apps simples e bonitos!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEDAE5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  email: {
    fontSize: 16,
    color: '#555',
    marginBottom: 12,
  },
  bio: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
});

export default ProfileScreen;
