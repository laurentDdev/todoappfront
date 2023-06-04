import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const InputAuth = ({label, value, setValue}: any) => {
  return (
    <View style={{width: 320}}>
      <Text style={styles.text}>{label}</Text>
      <TextInput style={styles.input} value={value} onChangeText={setValue} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#222F3E',
    opacity: 0.3,
  },
  input: {
    borderBottomWidth: 0.5,
    borderColor: '#222F3E',
    borderRadius: 13,
  },
});

export default InputAuth;
