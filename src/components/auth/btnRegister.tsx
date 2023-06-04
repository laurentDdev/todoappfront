import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const BtnRegister = ({onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnRegister}>
      <Text style={styles.textRegister}>S'inscrire</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnRegister: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 9999,
    borderWidth: 0.5,
    borderColor: '#222F3E',
  },
  textRegister: {
    color: '#2E86DE',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default BtnRegister;
