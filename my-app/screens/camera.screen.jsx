import { Camera, CameraType } from 'expo-camera';
import { useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedPhoto, setCapturedPhoto] = useState(null); 
  const ref = useRef(null);

  const takePhoto = async () => {
    if (ref.current) {
      const photo = await ref.current.takePictureAsync({
          quality: 0.9
      });
      console.debug(photo);
      setCapturedPhoto(photo.uri); 
    }
  };

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={ref}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePhoto}>
            <Text style={styles.text}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      {capturedPhoto && (
        <View style={styles.preview}>
          <Text style={styles.previewText}>Preview</Text>
          <Image source={{ uri: capturedPhoto }} style={styles.previewImage} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewText: {
    fontSize: 24,
    marginBottom: 10,
  },
  previewImage: {
    width: 300,
    height: 400,
    borderRadius: 10,
  },
});
