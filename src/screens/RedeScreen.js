import React from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';

const data = [
  {
    posto: 'Auto Posto Paschoal Ardito',
    cidade: 'Americana',
    endereco: 'Avenida Paschoal Ardito',
    telefone: '(19) 3468-2813',
  },
  {
    posto: 'Posto Recreio',
    cidade: 'Indaiatuba',
    endereco: 'Avenida Francisco de Paula Leite',
    telefone: '(19) 3935-3061',
  },
  {
    posto: 'Auto Posto Maxi II',
    cidade: 'Nova Odessa',
    endereco: 'Rua Andre Luiz Vilela',
    telefone: '(19) 3476-3031',
  },
  {
    posto: 'Posto Arena',
    cidade: 'Hortolândia',
    endereco: 'Avenida Santana',
    telefone: '(19) 3457-4995',
  },
  {
    posto: 'Auto Posto São Vicente',
    cidade: 'Santa Bárbara dOeste',
    endereco: 'Rua Limeira',
    telefone: '(19) 3457-4995',
  },
  {
    posto: 'Auto Posto Meta',
    cidade: 'Americana',
    endereco: 'Avenida Cillos',
    telefone: '(19) 3462-9723',
  },
  {
    posto: 'Posto Via Régio',
    cidade: 'Salto',
    endereco: 'Rua Rio Branco',
    telefone: '(11) 4456-4852',
  },
  {
    posto: 'Mauro Já Auto Posto 2',
    cidade: '',
    endereco: '',
    telefone: '',
  },
];

export default function RedeCredenciadosScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Rede Credenciados</Text>

      {data.map((item, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.label}>
            <Text style={styles.bold}>Credenciado</Text>  {item.posto}
          </Text>
          <Text style={styles.label}>
            <Text style={styles.bold}>Cidade</Text>  {item.cidade}
          </Text>
          <Text style={styles.label}>
            <Text style={styles.bold}>Endereço</Text>  {item.endereco}
          </Text>
          <Text style={styles.label}>
            <Text style={styles.bold}>Telefone</Text>  {item.telefone}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    padding: 16,
    flex: 1,
  },
  header: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#111',
    padding: 12,
    borderRadius: 6,
    marginBottom: 12,
  },
  label: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 4,
  },
  bold: {
    fontWeight: 'bold',
  },
});
