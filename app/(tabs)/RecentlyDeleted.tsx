import React, { useState, useEffect } from 'react';
import { View, Button, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import * as DocumentPicker from 'expo-document-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { restoreFile } from '.';


export async function addDeletedFile(file: DocumentPicker.DocumentPickerResult) {
  let deletedFiles = await AsyncStorage.getItem('deletedFiles');
  let updatedDeletedFiles = deletedFiles ? JSON.parse(deletedFiles) : [];
  updatedDeletedFiles.push(file);
  await AsyncStorage.setItem('deletedFiles', JSON.stringify(updatedDeletedFiles));
}

export default function RecentlyDeletedScreen() {

  const [deletedFiles, setDeletedFiles] = useState<DocumentPicker.DocumentPickerResult[]>([]);

  // Load deleted files from AsyncStorage when the component mounts
  useEffect(() => {
    const loadDeletedFiles = async () => {
      try {
        const storedDeletedFiles = await AsyncStorage.getItem('deletedFiles');
        if (storedDeletedFiles) {
          setDeletedFiles(JSON.parse(storedDeletedFiles));
        }
      } catch (error) {
        console.error('Error loading deleted files from storage:', error);
      }
    };

    loadDeletedFiles();
  }, []);

  // Permanently delete a file
  const permanentlyDeleteFile = async (fileIndexToDelete: number) => {
    const updatedDeletedFiles = deletedFiles.filter((_, index) => index !== fileIndexToDelete);
    await AsyncStorage.setItem('deletedFiles', JSON.stringify(updatedDeletedFiles));
    setDeletedFiles(updatedDeletedFiles);  // Update state after deletion
  };

  // Recover a deleted file
  const recoverDeletedFile = async (fileIndexToDelete: number) => {
    const fileToRecover = deletedFiles[fileIndexToDelete];
    const updatedDeletedFiles = deletedFiles.filter((_, index) => index !== fileIndexToDelete);
    await AsyncStorage.setItem('deletedFiles', JSON.stringify(updatedDeletedFiles));
    setDeletedFiles(updatedDeletedFiles);  // Update state after deletion
    restoreFile(fileToRecover);
  };

  // Render the list of deleted files
  const renderDeletedFiles = () => {
    if (deletedFiles.length === 0) {
      return <Text style={styles.pdfText}>Your PDF files will be displayed here.</Text>;
    }

    return deletedFiles.map((file, fileIndex) => {
      if ('assets' in file && Array.isArray(file.assets)) {
        return file.assets.map((asset, assetIndex) => (
          <View key={`${fileIndex}-${assetIndex}`} style={styles.fileRow}>
            <Text style={styles.fileTitle}>Title: {asset.name || 'Unnamed File'}</Text>
            <Text style={styles.fileType}>Type: {asset.mimeType || 'Unknown Type'}</Text>
            <Button
              title="Delete File Permanently"
              onPress={() => permanentlyDeleteFile(fileIndex)}
            />
            <Text style={styles.fileType}>{asset.mimeType || ' '}</Text>
            <Button
              title="Recover File"
              onPress={() => recoverDeletedFile(fileIndex)}
            />
          </View>
        ));
      }

      return null;
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Recently Deleted" backgroundColor="#e63946" />
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor="#888"
      />
      <ScrollView style={styles.pdfArea}>
        {renderDeletedFiles()}
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
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#f1f3f5',
        borderTopWidth: 1,
        borderTopColor: '#ced4da',
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
      }
});