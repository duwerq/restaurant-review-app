import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify, {Auth} from 'aws-amplify'
// import { withAuthenticator } from 'aws-amplify-react-native'
import { Button } from 'react-native-elements';

import Routes from './src/routes';
import config from './aws-exports'

Amplify.configure(config)

function App(props) {
  console.log({props})
  return (
    <View style={styles.container}>
      <Routes/>
    </View>
  );
}
const signUpConfig = {
  header: 'My Customized Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'Phone Number',
      key: 'phone_number',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 2,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 3,
      type: 'string'
    }
  ]
};

// export default withAuthenticator(App, {signUpConfig, usernameAttributes: "Phone Number"})

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
