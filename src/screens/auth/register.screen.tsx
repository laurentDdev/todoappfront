import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputAuth from '../../components/auth/InputAuth';
import BtnLogin from '../../components/auth/btnLogin';
import BtnRegister from '../../components/auth/btnRegister';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleRegister = () => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (pseudo.length < 3) {
      setError('Pseudo trop cours');
    } else if (password.length < 7) {
      setError('Mot de passe trop court');
    } else if (!emailRegex.test(email)) {
      setError(('Email invalide'));
    } else {
      setError('');
    }
  };
  const handleSetPseudo = (text: string) => {
    setPseudo(text);
  };

  const handleSetPassword = (text: string) => {
    setPassword(text);
  };
  const handleSetEmail = (text: string) => {
    setEmail(text);
  };
  return (
    <View style={styles.registerView}>
      <View style={styles.header}>
        <Text style={styles.text}>Inscription</Text>
        <Text style={styles.textDesc}>
          Inscrit toi et connecte toi afin de pouvoir gérer tes diffirente tache
        </Text>
      </View>
      <View style={styles.inputRegister}>
        <InputAuth label={'Email'} value={email} setValue={handleSetEmail} />
        <InputAuth label={'Pseudo'} value={pseudo} setValue={handleSetPseudo} />
        <InputAuth label={'Mot de passe'} value={password} setValue={handleSetPassword} />
        {error.length > 0 && <Text style={styles.txtError}>{error}</Text>}
      </View>

      <BtnRegister onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  registerView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  inputRegister: {
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
  txtError: {
    color: 'crimson',
    fontSize: 13,
  },
  textDesc: {
    fontWeight: 'bold',
    color: 'black',
    width: 270,
    textAlign: 'center',
    marginBottom: 80,
  },
});
export default RegisterScreen;
