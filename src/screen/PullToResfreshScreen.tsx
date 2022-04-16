import React from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import {styles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';
import { useState } from 'react';

export const PullToResfreshScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<String>();

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            console.log("Terminanos aqui")
            setRefreshing(false)
            setData("Hey! Devs")
        }, 3500)
    }

  return (
    <ScrollView 
        refreshControl={
        <RefreshControl
            refreshing={ refreshing }
            onRefresh={ onRefresh }
            progressViewOffset={10} // show the refresh 150px down below
            progressBackgroundColor="#00C897" // establece el color de fondo del pullToRefresh
            colors={ ["white", "red", "green", "yellow",]}
            

        />
    }
    >
      <View style={styles.globalMargin}>
        <HeaderTitle title="PullToRefresh" />
        {
            data && <HeaderTitle title={ data } />

        }
      </View>
    </ScrollView>
  );
};
