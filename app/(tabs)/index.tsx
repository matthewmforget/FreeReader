import React, { useState, useEffect } from 'react';
import { View, Button, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header'; // Import Header
import Footer from '../../components/Footer'; // Import Footer
import * as DocumentPicker from 'expo-document-picker';
import { addDeletedFile } from '../(tabs)/RecentlyDeleted';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function restoreFile(fileToAdd: DocumentPicker.DocumentPickerResult) {
  addFile(fileToAdd);
}

export default function App() {
  // State to hold the array of files
  const [files, setFiles] = useState<DocumentPicker.DocumentPickerResult[]>([]);

  // Load files from AsyncStorage when the component mounts
  useEffect(() => {
    const loadFiles = async () => {
      try {
        const storedFiles = await AsyncStorage.getItem('files');
        if (storedFiles) {
          setFiles(JSON.parse(storedFiles));
        }
      } catch (error) {
        console.error('Error loading files from storage:', error);
      }
    };

    loadFiles();
  }, []);

  // Function to handle file selection and adding to the array
  const uploadFileOnPressHandler = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*', // Adjust this to specify allowed file types
      });
      console.log('pickedFile', result);

      // Add the picked file to the state and store it
      if (!result.canceled) {
        addFile(result);
      }
    } catch (err) {
      console.error('Error picking document:', err);
    }
  };

  async function addFile(fileToAdd: DocumentPicker.DocumentPickerResult) {
    const updatedFiles = [...files, fileToAdd];
    setFiles(updatedFiles);
    await AsyncStorage.setItem('files', JSON.stringify(updatedFiles)); // Save files to AsyncStorage
  }

  // Function to display the list of uploaded files
  function displayTextList() {
    if (files.length === 0) {
      return (
        <Text style={styles.pdfText}>
          Your PDF files will be displayed here.
        </Text>
      );
    }

    return files.flatMap((file, fileIndex) => {
      // Check if the file contains assets
      if ('assets' in file && Array.isArray(file.assets)) {
        return file.assets.map((asset, assetIndex) => (
          <View key={`${fileIndex}-${assetIndex}`} style={styles.fileRow}>
            <Text style={styles.fileTitle}>Title: {asset.name || 'Unnamed File'}</Text>
            <Text style={styles.fileType}>Type: {asset.mimeType || 'Unknown Type'}</Text>
            <Button title="Delete File" onPress={() => deleteFile(fileIndex)} />
          </View>
        ));
      }

      return null; // Skip files without assets
    });
  }

  function deleteFile(fileIndexToDelete: number) {
    const fileToDelete = files[fileIndexToDelete];
    const updatedFiles = files.filter((_, index) => index !== fileIndexToDelete);
    setFiles(updatedFiles);
    addDeletedFile(fileToDelete);
    AsyncStorage.setItem('files', JSON.stringify(updatedFiles)); // Save updated files to AsyncStorage
  }

  return (
    <View style={styles.container}>
      <Header title="Writings" />

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#888"
      />

      {/* Button for adding files */}
      <View>
        <Button title="Pick A File" onPress={uploadFileOnPressHandler} />
      </View>

      {/* PDF Display Area */}
      <ScrollView style={styles.pdfArea}>
        {displayTextList()}
      </ScrollView>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  searchBar: {
    height: 40,
    margin: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  pdfArea: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#e9ecef',
    borderRadius: 5,
  },
  pdfText: {
    color: '#6c757d',
    fontSize: 16,
    textAlign: 'center',
  },
  fileRow: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  fileTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  fileType: {
    fontSize: 14,
    color: '#555',
  },
});