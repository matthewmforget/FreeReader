import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header'; // Import Header
import Footer from '../../components/Footer'; // Import Footer


export default function App() {
    return (
        <View style={styles.container}>

            <Header title="About" backgroundColor="#28a745" />


            {/* PDF Display Area */}
            <ScrollView style={styles.pdfArea}>
            <View style={styles.content}>
                    <Text style={styles.title}>About Me</Text>

                    <Text style={styles.paragraph}>
                        Hello! My name is Matthew Forget, and I’m a Computer Science graduate from York University.
                        I created this app using React Native with Expo, TypeScript, and the power of ChatGPT. 
                    </Text>

                    <Text style={styles.paragraph}>
                        The inspiration behind building this app comes from my love for listening to and reading philosophy papers.
                        However, I was frustrated with the current text-to-speech apps available, many of which require
                        paid subscriptions to read multiple PDFs and other texts. So, with the help of chat GPT, I decided to 
                        build my own solution to make listening to these materials more accessible for everyone. Chat GPT helped me
                        navigate through React methods and implement the code I needed to get this project done. Isn't AI amazing?
                        Even this text is written using Chat GPT! (Well, most of it)
                    </Text>

                    <Text style={styles.paragraph}>
                        I hope this app helps others enjoy the resources I love, without any barriers or subscriptions
                        getting in the way! If youre interested in more about me, visit the contact page for my github and socials!
                        Thanks for using FreeReader :)
                    </Text>
                </View>
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
    content: {
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
    paragraph: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
        marginBottom: 12,
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