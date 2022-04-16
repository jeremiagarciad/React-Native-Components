import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageSourcePropType,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {HeaderTitle} from '../components/HeaderTitle';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useAnimation} from './../hooks/useAnimation';
import { StackScreenProps } from '@react-navigation/stack';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo One',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/images/slide-1.png'),
  },
  {
    title: 'Titulo Two',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/images/slide-2.png'),
  },
  {
    title: 'Titulo Three',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/images/slide-3.png'),
  },
];


interface Props extends StackScreenProps<any, any> {}


export const SlideScreen = ({ navigation }: Props) => {
  // const navigation = useNavigation();

  const {opacity, fadeIn} = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const isVisible = useRef(false)

  

  const renderItem = (item: Slide) => {
    return (
      <View style={styles.ViewrenderItem}>
        <Image source={item.img} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
      <Carousel
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if( index === 2){
            isVisible.current = true;
            fadeIn();
          }
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotColor=""
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: '#5856D6',
          }}
        />
        <Animated.View
          style={{
            opacity: opacity
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              if(isVisible.current){
                console.log("click")
                navigation.navigate("Home")
              }
              
            }}
            style={styles.TouchableOpa}>
            <Text style={styles.Open}>Skip</Text>
            <Icon name="chevron-forward-outline" color="white" size={30} />
          </TouchableOpacity>
        </Animated.View>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subtitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  TouchableOpa: {
    flexDirection: 'row',
    backgroundColor: '#5856D6',
    width: 130,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    marginRight: 5,
  },
  image: {
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  ViewrenderItem: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
  },
  Open: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
