import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import InputAuth from '../../components/auth/InputAuth';
import BtnLogin from '../../components/auth/btnLogin';

const LoginScreen = () => {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {

  }
  const handleSetPseudo = (text: string) => {
    setPseudo(text);
  };

  const handleSetPassword = (text: string) => {
    setPassword(text)
  }


  return (
    <View style={styles.loginView}>
      <View style={styles.header}>
        <Text style={styles.text}>Bienvenue</Text>
        <Text style={styles.textDesc}>
          Connecte toi afin de pouvoir gérer tes diffirente tache
        </Text>
      </View>
      <View style={styles.inputLogin}>
        <InputAuth label={'Pseudo'} value={pseudo} setValue={handleSetPseudo} />
        <InputAuth label={'Mot de passe'} value={password} setValue={handleSetPassword} />
      </View>
      <BtnLogin onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  inputLogin: {
    gap: 10,
    marginBottom: 40,
  },
  header: {
    alignItems: 'center',
    gap: 10,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 40,
  },
  textDesc: {
    fontWeight: 'bold',
    color: 'black',
    width: 250,
    textAlign: 'center',
    marginBottom: 80,
  },
});

export default LoginScreen;
