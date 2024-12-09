import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Image } from 'react-native';
import Header from '../../components/Header'; // Import the reusable Header component
import Footer from '../../components/Footer'; // Import the reusable Footer component

export default function Contact() {
    const openLink = (url: string) => {
        Linking.openURL(url); // Opens the provided URL in a browser
    };

    return (
        <View style={styles.container}>
            {/* Header with green color */}
            <Header title="Contact" backgroundColor="#28a745" />

            {/* Gradient background for the contact section */}
            <ScrollView style={styles.scrollArea}>
                <View style={styles.content}>
                    <Text style={styles.title}>Contact Me</Text>

                    {/* Gradient Background and Boxes */}
                    <View style={styles.boxContainer}>
                        <TouchableOpacity 
                            style={styles.box} 
                            onPress={() => openLink('https://github.com/matthewmforget')} 
                        >
                            {/* Image for GitHub */}
                            <Image source={require('../../assets/images/githubLogo.png')} style={styles.boxImage} />
                            <Text style={styles.boxText}>GitHub</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.box} 
                            onPress={() => openLink('https://matthewmforget.github.io/website/Resume_coding.pdf')} 
                        >
                            {/* Image for Resume */}
                            <Image source={require('../../assets/images/catresume.png')} style={styles.boxImage} />
                            <Text style={styles.boxText}>Resume</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.box} 
                            onPress={() => openLink('https://matthewmforget.github.io/website/')} 
                        >
                            {/* Image for Personal Website */}
                            <Image source={require('../../assets/images/catresume.png')} style={styles.boxImage} />
                            <Text style={styles.boxText}>Personal Website</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={styles.box} 
                            onPress={() => openLink('https://linkedin.com/in/matthewmforget')} 
                        >
                            {/* Image for LinkedIn */}
                            <Image source={require('../../assets/images/LinkedIn.png')} style={styles.boxImage} />
                            <Text style={styles.boxText}>LinkedIn</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            {/* Footer at the bottom */}
            <Footer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        justifyContent: 'space-between', // Ensures the footer is pushed to the bottom
    },
    scrollArea: {
        flex: 1,
        padding: 16,
    },
    content: {
        height: 100,
        flex: 1,
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
        textAlign: 'center',
    },
    boxContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 30,
    },
    box: {
        width: '45%', // Boxes will take up 45% of the width, leaving some space between them
        height: 120,
        marginBottom: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    boxImage: {
        flex: 1,
        width: 100, // Image size can be adjusted
        height: 100,
        marginBottom: 8, // Space between the image and text
        borderRadius: 10,
    },
    boxText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
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