import React, { useContext } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MenuItem} from '../interfaces/AppInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import Spacer from './Spacer';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

export const FlatListMenuItem = ({menuItem}: Props) => {
  
  const navigation = useNavigation()
  const {theme: {colors}} = useContext( ThemeContext )


  return (
    <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate( menuItem.component as any)}
    >
      <View style={styles.container}>
        <Icon name={menuItem.icon} 
        size={23} 
        color={colors.text} />
        <Text style={{
          ...styles.itemText,
          color: colors.text
          
          }}>{menuItem.name}</Text>
        <Spacer />
        <Icon
        name="chevron-forward-outline" 
        size={23} 
        color={colors.text} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
