import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header'; // Import Header
import Footer from '../../components/Footer'; // Import Footer
import SettingsScreen from './settings';
import { useRouter } from 'expo-router';  // Import useRouter from expo-router

export default function Archive() {
    return (
        <View style={styles.container}>

            <Header title="Archive"/>

            {/* PDF Display Area */}
            <ScrollView style={styles.pdfArea}>
                <Text style={styles.pdfText}>Your files will be displayed here.</Text>
            </ScrollView>

            <Footer/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
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
});