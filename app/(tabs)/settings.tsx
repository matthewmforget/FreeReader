import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import Header from '../../components/Header'; 
import Footer from '../../components/Footer';
import { useRouter } from 'expo-router';

export default function SettingsScreen({ navigation }: { navigation: any }) {
    const router = useRouter();
    return (
        <View style={styles.container}>
            {/* Header */}
            <Header title="Settings" />

            {/* Scrollable Area for Help and Controls Sections */}
            <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollContent}>
                {/* Help Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Help</Text>
                    <View style={styles.buttonStyle}>
                        <Button 
                        title="About" 
                        onPress={() => router.push('/About')}   />
                    </View>
                    <View style={styles.buttonStyle}>
                        <Button 
                        title="Contact" 
                        onPress={() => router.push('/Contact')}   />
                    </View>
                </View>

                {/* Controls Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Tools</Text>

                    <View style={styles.buttonStyle}>
                        <Button 
                        title="Adjust Speech Settings" 
                        onPress={() => router.push('/AdjustSpeechSettings')}   />
                    </View>

                    <View style={styles.buttonStyle}>
                        <Button 
                        title="Recently Deleted" 
                        onPress={() => router.push('/RecentlyDeleted')}   />
                    </View>

                </View>
            </ScrollView>

            {/* Footer */}
            <Footer/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    scrollArea: {
        flex: 1,
    },
    scrollContent: {
        padding: 16,
    },
    buttonStyle: {
        borderWidth: 1,
        borderColor: '#000000',
    },
    section: {
        marginBottom: 24,
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2, // Adds shadow for Android
        borderWidth: 4,  // Adds the dividing line
        borderBottomColor: '#000000',  // Color of the dividing line
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333333',
        textAlign: 'center',
    },
});