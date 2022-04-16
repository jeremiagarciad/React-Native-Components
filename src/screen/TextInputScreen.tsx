import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useForm} from './../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const {onChange, formValue, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="TextInputs" />

          <TextInput
            style={{
              ...stylesScreen.input,
              borderColor: colors.border,
              color: colors.text,
            }}
            placeholder="Put your name.."
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
          />
          <TextInput
            style={{
              ...stylesScreen.input,
              borderColor: colors.border,
              color: colors.text,
            }}
            placeholder="Put your email.."
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
            keyboardAppearance="dark"
          />
          <View
            style={{
              ...stylesScreen.switchRow,
              borderColor: colors.border,
            }}>
            <Text
              style={{
                ...stylesScreen.switchText,
                color: colors.text,
              }}>
              Subscribirse
            </Text>
            <CustomSwitch
              isOn={isSubscribed}
              onChange={value => onChange(value, 'isSubscribed')}
            />
          </View>

          <HeaderTitle title={JSON.stringify(formValue, null, 3)} />

          <HeaderTitle title={JSON.stringify(formValue, null, 3)} />
          <TextInput
            style={stylesScreen.input}
            placeholder="Put your phone number.."
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="number-pad"
          />
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 20,
    marginVertical: 10,
    color: 'pink',
  },
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});
