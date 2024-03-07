import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Title = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.textTitleContainer}>Welcome</Text>
    <Text style={styles.hola}>Enter your details below</Text>
  </View>
);

const InputField = ({ placeholder, keyboardType, multiline, maxLength, value, onChangeText }) => (
  <TextInput
    placeholder={placeholder}
    keyboardType={keyboardType}
    multiline={multiline}
    maxLength={maxLength}
    value={value}
    onChangeText={onChangeText}
    style={styles.inputField}
  />
);

const PasswordAlert = ({ show }) => (
  show && <Text style={styles.passwordAlert}>Password must contain at least 8 characters</Text>
);

const SubmitButton = ({ onPress }) => (
  <View style={styles.tilin}>
    <TouchableOpacity style={styles.buttonB} onPress={onPress}>
      <Text style={styles.buttonText}>Sign Up</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAlert, setPasswordAlert] = useState(false);

  const handleSubmit = () => {
    if (expediente.length === 8 && password.length >= 8) {
      Alert.alert('Login exitoso!');
    } else {
      Alert.alert('Datos incorrectos');
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    setPasswordAlert(text.length > 0 && text.length < 8);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/pajaro.png')}
        style={{ width: 100, height: 100, marginBottom: 50, marginTop: 135 }}
      />
      <View style={styles.box}>
        <Title />
        <View style={styles.inputsContainer}>
          <InputField
            placeholder="Expediente"
            keyboardType="numeric"
            multiline={false}
            maxLength={8}
            value={expediente}
            onChangeText={(text) => setExpediente(text)}
          />
          <InputField
            placeholder="Password"
            multiline={false}
            secureTextEntry={true}
            value={password}
            onChangeText={handlePasswordChange}
          />
          <PasswordAlert show={passwordAlert} />
          <SubmitButton onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#3c4c8f',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'white',
    width: '100%',
    height: '80%',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titleContainer: {
    marginTop: 100,
    marginBottom: 20,
    alignItems: 'center',
    marginBottom: 50,
  },
  textTitleContainer: {
    fontWeight: 'bold',
    fontSize: 28,
    paddingBottom: 10,
  },
  inputsContainer: {
    width: '80%',
    marginBottom: 5,
  },
  inputField: {
    marginBottom: 30,
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  tilin: {
    marginTop: 20,
    backgroundColor: 'white',
  },
  passwordAlert: {
    color: 'red',
    fontSize: 13,
    marginBottom: 15,
  },
  buttonB: {
    backgroundColor: '#3c4c8f',
    alignItems: 'center',
    height: 50,
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
