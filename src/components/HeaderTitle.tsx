import {View, Text} from 'react-native';
import React, { useContext } from 'react';
import {styles} from './../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';


interface Props {
    title: string;
}
export const HeaderTitle = ({title}: Props) => {

  const { theme: {colors}} = useContext(ThemeContext);


  const {top} = useSafeAreaInsets();

  return (
      
    <View style={{marginTop: top + 20, marginBottom: 20}}>
      <Text style={{
        ...styles.title,
        color: colors.text
        }}>{ title }</Text>
    </View>
  );
}
