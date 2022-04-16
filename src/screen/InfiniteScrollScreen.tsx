import {View, Text, FlatList, StyleSheet, Image, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {HeaderTitle} from '../components/HeaderTitle';
// import { styles } from '../theme/appTheme'

export const InfiniteScrollScreen = () => {
    
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMoreData = () => {

    const newArray: number[] = [];

    for(let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;

    }
    setNumbers([...numbers, ...newArray]);
    
  }

  const renderItems = (item: number) => {
    return (
      <Image
        source={{uri:`https://picsum.photos/id/${item}/500/400` }}
        style={{ height: 400, width: 500 , backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: 'black'}}
     />
    );
  };

  return (
    <View  style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0,0.5)', }}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItems(item)}

        ListHeaderComponent={ () => <HeaderTitle title="Infinite Scroll Screen" /> }

        onEndReached={ loadMoreData }
        onEndReachedThreshold={0.5}

        ListFooterComponent={ () => (
          <View style={{
            height: 150,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}>
            <ActivityIndicator  size={30} color="#5856D6"/>

          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});
