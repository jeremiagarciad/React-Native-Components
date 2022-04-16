import {View, Text, SectionList} from 'react-native';
import React, { useContext } from 'react';
import {HeaderTitle} from './../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import { ItemSeparator } from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

export const SectionListScreen = () => {

  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{...styles.globalMargin, flex: 1}}>

      <SectionList
        sections={casas}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => <Text style={{color: colors.text}}>{item}</Text>}

        ListHeaderComponent={ () => <HeaderTitle title="Section List" />}

        // renderiza en el footer la cantidad secciones del SectionList
        ListFooterComponent={ () => <HeaderTitle title={`Total de casas ${casas.length}`} />}

        // Hace que los encabezados de las secciones se adhieran a la parte superior de la pantalla hasta que el siguiente los empuje.
        //Makes section headers stick to the top of the screen until the next one pushes it off.
        stickySectionHeadersEnabled={true}

        renderSectionHeader={({section: {casa}}) => (
          <View style={{backgroundColor: colors.background}}>
            <HeaderTitle title={casa} />
          </View>
        )}
        // renderiza la cantidad de elementos de una lista por secciones
        renderSectionFooter={ ({ section }) => (

            <HeaderTitle title={`Total: ${section.data.length}`} />
        ) }

        // separa las secciones...
        SectionSeparatorComponent={ () => <ItemSeparator />}
        //separa los items con una linea
        ItemSeparatorComponent={ () => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
