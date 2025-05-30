import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SuporteScreen() {
  const openWhatsApp = () => {
    Linking.openURL('https://wa.me/5511999999999'); // substitua pelo número real
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/whatsapp.png')} // ícone do WhatsApp (verde e branco)
        style={styles.whatsappIcon}
      />
      <Text style={styles.title}>Entre em contato conosco pelo Whatsapp</Text>

      <TouchableOpacity style={styles.button} onPress={openWhatsApp}>
        <Text style={styles.buttonText}>Chamar Agora</Text>
      </TouchableOpacity>

      <View style={styles.optionList}>
        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>Contato por telefone</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>Abrir Ocorrência</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow}>
          <Text style={styles.optionText}>FAQ</Text>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  whatsappIcon: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ADD8E6',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 30,
  },
  buttonText: {
    fontWeight: '600',
  },
  optionList: {
    width: '100%',
    borderTopColor: '#ccc',
    borderTopWidth: 1,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  optionText: {
    fontSize: 16,
  },
});