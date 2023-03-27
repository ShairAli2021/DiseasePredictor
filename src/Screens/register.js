import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const Save = () => {
    try {
      database()
        .ref('users/')
        .once('value', snapshot => {
          const responselist = snapshot.val();
          for (const user of Object.values(responselist)) {
            if (username === user.name) {
              flag = true;
            }
          }
          if (flag) {
            setError('Username Not Avalaible!');
          } else {
            database().ref('users/').push().set({
              name: username,
              password: password,
            });
            Alert.alert('Success', 'Registered Successfully!');
          }
        });
    } catch (empty) {
      Alert.alert('Empty', 'No user regestered! ');
    }
  };

  return (
    <View>
      <TextInput
        style={styles.inputField}
        placeholder="Unique Email : "
        value={email}
        autoComplete="off"
        onChangeText={newValue => setUsername(newValue.trim())}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Unique Username : "
        value={username}
        autoComplete="off"
        onChangeText={newValue => setEmail(newValue.trim())}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Try Complex Password : "
        value={password}
        autoComplete="off"
        onChangeText={newValue => setPassword(newValue.trim())}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Confirm Your Password : "
        value={newPassword}
        autoComplete="off"
        onChangeText={newValue => setNewPassword(newValue.trim())}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (netInfo) {
            if (username.length < 4) {
              setError('Username length must be greater then 4');
            } else {
              if (password.length < 5) {
                setError('Password length must be greater then 4');
              } else {
                setError('');
                ToastAndroid.show('Please wait...', ToastAndroid.LONG);
                Save();
              }
            }
          } else {
            ToastAndroid.show(
              'No Internet, Check Your Internet Connection!!!',
              ToastAndroid.LONG,
            );
          }
        }}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  inputField: {
    alignSelf: 'center',
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    textAlign: 'center',
    margin: 10,
    width: 260,
  },
    btn: {
        alignSelf: 'center',
        alignItems: 'center',
        width: 100,
        borderRadius: 10,
        margin: 10,
        paddingVertical: 10,
        backgroundColor: 'green',
      },
      btnText: {
        fontSize: 20,
      },
});
