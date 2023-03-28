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
import React, {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import {useNavigation} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [netInfo, setNetInfo] = useState(false);
  const navigation = useNavigation();
  let flag = false;
  useEffect(() => {
    const netInfoData = NetInfo.addEventListener(state => {
      setNetInfo(state.isConnected);
    });
    return () => {
      netInfoData;
    };
  }, []);

  const Verify = () => {
    try {
      database()
        .ref('users/')
        .once('value', snapshot => {
          const responselist = snapshot.val();
          for (const user of Object.values(responselist)) {
            if (username === user.name && password === user.password) {
              flag = true;
            }
          }
          if (flag) {
            Alert.alert('Success', 'Loggin Successfully!', [
              {
                text: 'Ab Chalo',
                onPress: () => {
                  navigation.navigate('save report', {name: username});
                },
              },
            ]);
          } else {
            setError('Username or Password mistake!!!');
          }
        });
    } catch (noImg) {
      Alert.alert('No Image', 'You have no Image uploaded yet!');
    }
  };

  return (
    <View
      style={styles.container}
      onPress={() => {
        Keyboard.dismiss();
        console.warn('test');
      }}>
      <Text style={styles.NoteText}>
        You must login to save and view your reports
      </Text>
      <Text style={styles.ErrorText}>{error}</Text>
      <TextInput
        style={styles.inputField}
        placeholder="Unique Username : "
        value={username}
        autoComplete="off"
        onChangeText={newValue => setUsername(newValue.trim())}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Try complex Password : "
        value={password}
        secureTextEntry={true}
        onChangeText={newPass => setPassword(newPass)}
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
                ToastAndroid.show(
                  'Verifying! Please wait...',
                  ToastAndroid.LONG,
                );
                Verify();
              }
            }
          } else {
            ToastAndroid.show(
              'No Internet, Check Your Internet Connection!!!',
              ToastAndroid.LONG,
            );
          }
        }}>
        <Text style={styles.btnText}>Loggin</Text>
      </TouchableOpacity>
      {/* <Text style={styles.NoteText}>Note:</Text> */}
      <Text
        style={[
          styles.ErrorText,
          {opacity: 0.7, fontSize: 12, marginLeft: 15},
        ]}>
        Not Registered yet!
      </Text>
      <TouchableOpacity
        // style={styles.btn}
        style={{alignSelf: 'center'}}
        onPress={() => navigation.navigate("register")}>
        <Text style={{fontSize: 20, color: 'darkblue'}}>Register here...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },
  NoteText: {
    fontSize: 16,
    margin: 10,
    opacity: 0.6,
  },
  ErrorText: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 300,
    borderRadius: 5,
  },
  btn: {
    backgroundColor: 'gray',
    padding: 10,
    
    borderRadius: 5,
  },
  btnText: {
    fontSize: 20,
  },
});
