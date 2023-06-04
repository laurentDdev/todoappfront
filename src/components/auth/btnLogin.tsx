import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const BtnLogin = ({onPress}: any) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnLogin}>
      <Text style={styles.textLogin}>Se connecter</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnLogin: {
    backgroundColor: '#2E86DE',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 9999,
    borderWidth: 0.5,
    borderColor: '#222F3E',
  },
  textLogin: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default BtnLogin;
