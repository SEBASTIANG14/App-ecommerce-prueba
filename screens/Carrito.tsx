import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, Image, ImageBackground, TouchableOpacity, Modal } from 'react-native';
import { MenuSup } from '../components/MenuSup';

export const Carrito = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <ImageBackground source={require('../src/img/goku.jpg')} style={styles.imageBack}>
            <SafeAreaView style={styles.container}>
                <View style={styles.textContainer}>
                    <Image source={require('../src/img/carrito.png')} style={styles.image} />
                    <Text style={styles.text}>Carrito</Text>
                </View>
                <MenuSup />

                
                <TouchableOpacity style={styles.btn} onPress={openModal}>
                    <Text style={styles.btntext}>BOTON</Text>
                </TouchableOpacity>

                
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={closeModal} 
                >
                    <View style={styles.modalBackground}>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalText}>USTED PRESIONO EL BOTON</Text>
                            <Button title="Cerrar" onPress={closeModal} />
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    text: {
        flex: 2,
        marginTop: 40,
        marginLeft: 10,
        fontSize: 24,
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '10%',
        width: '100%',
        padding: 10,
    },
    image: {
        width: 25,
        height: 25,
        marginRight: 10,
        marginTop: 40,
        marginLeft: 10,
    },
    imageBack: {
        flex: 1,
        width: 500,
        height: 1000,
    },
    btn: {
        width: 150,
        height: 50,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 10,
    },
    btntext: {
        fontSize: 16,
        color: 'white',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalText: {
        fontSize: 18,
        marginBottom: 20,
    },
});

export default Carrito;
