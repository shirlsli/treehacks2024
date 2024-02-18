import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import TesseractOcr from 'react-native-tesseract-ocr';

const OCRScreen = () => {
  const [recognizedText, setRecognizedText] = useState('');
  const [cameraRef, setCameraRef] = useState(null);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const options = { quality: 0.5, base64: true };
        const data = await cameraRef.takePictureAsync(options);
        recognizeTextFromImage(data.uri);
      } catch (error) {
        console.error('Failed to take picture:', error);
      }
    }
  };

  const recognizeTextFromImage = async (imageUri) => {
    try {
      const recognized = await TesseractOcr.recognize(
        imageUri,
        'LANG_ENGLISH',
        {
          whitelist: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
          blacklist: '!"#$%&/()={}[]+*-_:;<>',
        }
      );
      setRecognizedText(recognized);
    } catch (err) {
      console.error('Error recognizing text:', err);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {recognizedText ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>{recognizedText}</Text>
          <Button title="Take Another Picture" onPress={() => setRecognizedText('')} />
        </View>
      ) : (
        <RNCamera
          style={{ flex: 1 }}
          ref={(ref) => setCameraRef(ref)}
          type={RNCamera.Constants.Type.back}
          captureAudio={false}>
          {({ camera, status }) => {
            if (status !== 'READY') return <View />;
            return (
              <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                <Button title="Take Picture" onPress={takePicture} />
              </View>
            );
          }}
        </RNCamera>
      )}
    </View>
  );
};

export default OCRScreen;
