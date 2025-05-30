import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function UsuarioScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={require('../../assets/avatar.png')} // coloque um placeholder em assets
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.cameraIcon}>
          <MaterialIcons name="photo-camera" size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>Felipe</Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Telefone</Text>
          <Text style={styles.value}>(11) 1111-1111</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>felipe@feliplipe.com.br</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Endereço</Text>
          <Text style={styles.value}>Rua Salacir Salles D'Ávila</Text>
        </View>
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
    marginTop: 50 
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#042B3d',
  },
  cameraIcon: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#042B3d',
    borderRadius: 15,
    padding: 4,
    elevation: 3,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 20,
  },
  infoContainer: {
    width: '90%',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  label: {
    color: '#666',
    fontWeight: '500',
  },
  value: {
    color: '#000',
  },
});