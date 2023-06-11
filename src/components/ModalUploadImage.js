import { StyleSheet, Text, View, Modal, Pressable, TouchableOpacity, Image } from 'react-native'
import React, { useState, useCallback } from 'react'
import { uploadImage } from '../services/NewsService'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker';
import Lottie from 'lottie-react-native';
import uploadAnimation from '../assets/lottie/4510-uploading.json'


const RenderUploading = () => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Lottie style={{ width : 200, height : 200 }} source={uploadAnimation} autoPlay loop />
        </View>
    )
}

const ModalUploadImage = ({ controlModal, onImageSelected = (e) => { }, onUploaded = (e) => { } }) => {
    const [isUploading, setIsUploading] = useState(false)
    const [title, setTitle] = useState('Select Image')
    const [isShowModal, setIsShowModal] = controlModal
    const handleAddImage = useCallback(async () => {
        await launchImageLibrary({
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra: true,
        }, handleImage)
    })

    const handleTakePhoto = useCallback(async () => {
        await launchCamera({
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
            includeExtra: true,
        }, handleImage)
    }, [])

    const handleImage = useCallback(async (data) => {
        if (data.assets) {
            onImageSelected(data.assets[0].uri)
            setIsUploading(true)
            setTitle('Uploading...')
            const { uri, type, fileName: name } = data.assets[0];
            const formData = new FormData();
            formData.append('image', { uri, name, type })
            const { data: resUpload } = await uploadImage(formData)
            setIsUploading(false)
            setTitle('Select Image')
            onUploaded(resUpload.path)
        }
        setIsShowModal(false)
    }, [])

    const closeModal = useCallback(() => {
        if (isUploading) return;
        setIsShowModal(false)
    }, [])

    return (
        <Modal animationType="fade" transparent={true} visible={isShowModal} onRequestClose={closeModal}>
            <Pressable onPress={closeModal} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <View style={styles.container}>
                    <View>
                        <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 18, marginBottom: 16 }}>{title}</Text>
                    </View>
                    {isUploading ? <RenderUploading /> :
                        (<View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={handleAddImage} style={styles.button} >
                                <Image style={styles.buttonIcon} source={require('../assets/images/image-gallery.png')}></Image>
                                <Text style={styles.buttonLabel}>Gallery</Text>
                            </TouchableOpacity>
                            <View style={{ width: 16 }} />
                            <TouchableOpacity onPress={handleTakePhoto} style={styles.button} >
                                <Image style={styles.buttonIcon} source={require('../assets/images/photo-camera.png')}></Image>
                                <Text style={styles.buttonLabel}>Camera</Text>
                            </TouchableOpacity>
                        </View>)}
                </View>
            </Pressable>
        </Modal >
    )
}

export default ModalUploadImage

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '80%',
        borderRadius: 20,
        padding: 20
    },
    button: {
        flex: 1,
        padding: 8,
        backgroundColor: '#fff',
        elevation: 5,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonIcon: {
        tintColor: '#1877F2',
        width: 24,
        height: 24,
        margin: 8
    }
    ,
    buttonLabel: {
        fontWeight: 'bold'
    }



})