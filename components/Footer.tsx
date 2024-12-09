import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';  // Import useRouter

// Footer component
export default function Footer() {
    const router = useRouter();  // Initialize router for navigation

    return (
        <View style={styles.footer}>
            <Button 
                title="Writings" 
                onPress={() => router.push('/')}  // Navigate to Home
            />
            <Button 
                title="Archive" 
                onPress={() => router.push('/archive')}  // Navigate to Archive
            />
            <Button 
                title="Settings" 
                onPress={() => router.push('/settings')}  // Navigate to Settings
            />
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
        backgroundColor: '#f1f3f5',
        borderTopWidth: 1,
        borderTopColor: '#ced4da',
    },
});