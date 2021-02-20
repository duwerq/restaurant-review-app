
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Amplify, {Auth} from 'aws-amplify'
import { EstablishmentsContext, ContextProviderComponent } from '../context/establishments'


const EstablishmentsListView = (props) => {
  console.log({props})
  return (
    <View>
      <Text>Establishments List</Text>
    </View>
  )
}

// export default withAuthenticator(App, {signUpConfig, usernameAttributes: "Phone Number"})

const EstablishmentsListWithContext = (props) => {
  return (
   <ContextProviderComponent>
      <EstablishmentsContext.Consumer>
        {
          context =>  <EstablishmentsListView {...props} context={context} />
        }
      </EstablishmentsContext.Consumer>
    </ContextProviderComponent>
  )
}

export default EstablishmentsListWithContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
