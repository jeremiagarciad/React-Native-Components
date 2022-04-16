import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { HeaderTitle } from '../components/HeaderTitle';
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { menuItems } from '../data/MenuItem';

import { styles } from '../theme/appTheme';


export const HomeScreen = () => {

  <ItemSeparator />
    

  return (
    <View  style={{ flex: 1, ...styles.globalMargin}}>
      <FlatList 
        data={ menuItems }
        renderItem={ ({item}) => <FlatListMenuItem menuItem={item}/>}
        keyExtractor={(item) => item.name}
        ListHeaderComponent={ <HeaderTitle title='Menu de Options'/> }
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  )
}


