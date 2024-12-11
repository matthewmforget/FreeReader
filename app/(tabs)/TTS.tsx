import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import Tts from 'react-native-tts';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

let speed:number = 1.0;
let pitch:number = 1.0;
let language:String = 'en-US';
let fileToParse:DocumentPicker.DocumentPickerResult;
let text:String;

export function setParameters(s: number, p:number) {
    speed = s;
    pitch = p;
}

export function setFileToPlay(file: DocumentPicker.DocumentPickerResult) {
    fileToParse = file;
}

const TTS = () => {
  const [text, setText] = useState('');

  // Function to start TTS
  const handleSpeak = () => {
    if (text.trim()) {
      Tts.stop(); // Stop any ongoing TTS
      Tts.speak(text); // Speak the entered text
    } else {
      alert('Please enter some text to read.');
    }
  };

  // Function to stop TTS
  const handleStop = () => {
    Tts.stop(); // Stop the TTS immediately
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Text-to-Speech Demo</Text>
      <TextInput
        style={styles.input}
        placeholder="Type text here..."
        onChangeText={setText}
        value={text}
      />
      <View style={styles.buttonContainer}>
        <Button title="Speak" onPress={handleSpeak} />
        <Button title="Stop" color="red" onPress={handleStop} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});