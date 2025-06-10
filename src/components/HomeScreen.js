import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const data = [
  { id: '1', title: 'Veja o meu Perfil!' },
  { id: '2', title: 'Explore o React Navigation' },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Página Home!</Text>
      <Text style={styles.subtitle}>Aqui estão algumas dicas para começar:</Text>
      
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text style={styles.item}>• {item.title}</Text>}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEDAE5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'center',
    color: '#555',
  },
  list: {
    marginTop: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
});

export default HomeScreen;
