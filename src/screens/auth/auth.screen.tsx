import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// @ts-ignore
import ToDoLogo from '../../assets/todo.png';
import BtnLogin from '../../components/auth/btnLogin';
import BtnRegister from '../../components/auth/btnRegister';
const AuthScreen = ({navigation}: any) => {
  const handleLoginBtn = () => {
    navigation.navigate('Login');
  };

  const handleRegisterBtn = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.authView}>
      <Image
        source={ToDoLogo}
        style={styles.image}
        resizeMode={'center'}
        resizeMethod={'resize'}
      />
      <Text style={styles.text}>Liste des taches</Text>
      <View style={{gap: 20}}>
        <BtnLogin onPress={handleLoginBtn} />
        <BtnRegister onPress={handleRegisterBtn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  authView: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    height: 350,
    width: 350,
  },
  text: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 40,
    marginBottom: 30,
  },
});

export default AuthScreen;
