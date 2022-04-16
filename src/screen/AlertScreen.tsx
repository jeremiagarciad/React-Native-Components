import {View, Text, Button, Alert} from 'react-native';
import React from 'react';
import prompt from 'react-native-prompt-android';
import {HeaderTitle} from './../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {

  const showAlert = () => {

    Alert.alert(
        "Titulo: Hola Jeremias",
        "Este es Cuerpo de la alerta",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
  };

  const showPrompt = () => {
    prompt(
        'Enter password',
        'Enter your password to claim your $1.5B in lottery winnings',
        [
         {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
         {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
        ],
        {
            type: 'secure-text',
            cancelable: false,
            defaultValue: 'test',
            placeholder: 'placeholder'
        }
    );

  }


  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />

      <Button title="Show Alert" onPress={showAlert} />
      <Button title="Show Prompt" onPress={showPrompt} />
    </View>
  );
};
