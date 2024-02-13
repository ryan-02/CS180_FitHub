import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

// Make sure to accept the navigation prop
export default function LoginScreen({ navigation }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (name, value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleLogin = () => {
  // Simulate checking credentials (replace this with your authentication logic)
    /*const loginSuccessful = form.email === 'user@example.com' && form.password === 'password'; // Example condition

    if (loginSuccessful) {
      navigation.navigate('Main');
    } else {
      alert('Login failed. Please check your credentials.');
    }
    */

    navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#071525' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://i.postimg.cc/1zrHQNhS/DALL-E-2024-02-08-23-54-39-Design-a-sleek-and-modern-logo-for-a-fitness-app-focused-on-bodyweight.webp' }}
            style={styles.headerImg}
          />
          <Text style={styles.title}>Sign in to FitHub</Text>

          <Text style={styles.Label}>Email address</Text>
          <TextInput
            placeholder="john@example.com"
            placeholderTextColor="#6b7280"
            style={styles.inputControl}
            value={form.email}
            onChangeText={text => handleInputChange('email', text)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.Label}>Password</Text>
          <TextInput
            placeholder="*********"
            placeholderTextColor="#6b7280"
            style={styles.inputControl}
            value={form.password}
            onChangeText={text => handleInputChange('password', text)}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.signin}>
          <TouchableOpacity onPress={handleLogin}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Sign in</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={{ marginTop: 'auto' }}>
          <Text style={styles.signup}>
            Not Registered?{' '}
            <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    marginBottom: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 58,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
    textAlign: 'center',
  },
  Label: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 26,
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  signin: {
    marginVertical: 8,
  },
  signup: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
});
