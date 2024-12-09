import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define the props type for the Header component
interface HeaderProps {
    title: string;
    backgroundColor?: string;
}

export default function Header({ title, backgroundColor = '#6200ea' }: HeaderProps) {
    return (
        <View style={[styles.header, { backgroundColor }]}> {/* Apply the dynamic background color */}
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
    },
    headerText: {
        color: '#ffffff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});