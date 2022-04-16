import { View, Text, Button, Modal } from 'react-native';
import React, { useState } from 'react'
import { styles } from '../theme/appTheme'
import { HeaderTitle } from './../components/HeaderTitle';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState( false )

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />

        <Modal
            animationType="fade"
            visible={ isVisible }
            transparent={ true }
        >
            {/* Background negro del modal */}
            <View style={{
                flex: 1,
                backgroundColor: "rgba(0,0,0,0.3)",
                alignItems: "center",
                justifyContent: "center",
            }}>
                {/* Contenido del Modal */}
                <View
                 style={{
                     backgroundColor: "white",
                     height: 200,
                     width: 250,
                     borderRadius: 10,
                     padding: 10,
                     alignItems: "center",
                     justifyContent: "center",
                     shadowOffset: {
                         width: 0,
                         height: 10,
                     },
                     elevation: 10
                 }}
                >
                <Text style={{ fontSize: 20, fontWeight: "bold", }}>Modal</Text>
                    <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 20 }}>Cuerpo del Modal</Text>
                    <Button
                        title="Close Modal"
                        onPress={ () => setIsVisible( false )}
                    />
                </View>

            </View>
        </Modal>

      <Button
        title='Open Modal'
        onPress={() => setIsVisible( true )}
      />
    </View>
  )
}