import { Linking } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as DocumentPicker from 'expo-document-picker';

const STORAGE_KEY = "sharedFiles";

let sharedFiles: DocumentPicker.DocumentPickerResult[] = [];

export function getSharedFiles() {
    return sharedFiles;
}

export function setSharedFiles(files: DocumentPicker.DocumentPickerResult[]) {
    sharedFiles = files;
}

export const handleSharedContent = async () => {
  try {
    const url = await Linking.getInitialURL();

    if (url) {
      console.log("Received content link:", url);

      const existingFiles = await AsyncStorage.getItem(STORAGE_KEY);
      const filesArray = existingFiles ? JSON.parse(existingFiles) : [];

      // Append new file content
      const updatedFilesArray = [...filesArray, url];
      sharedFiles = updatedFilesArray;

      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedFilesArray));

      console.log("Content stored into AsyncStorage.");
    }
  } catch (e) {
    console.error("Error parsing incoming content links", e);
  }
};