import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider'; // Import Slider
import Header from '../../components/Header'; // Reuse Header component
import Footer from '../../components/Footer'; // Reuse Footer component

export default function AdjustSpeechSettingsScreen() {
    // State hooks for each setting
    const [speed, setSpeed] = useState(1); // Initial speed is 1x
    const [pitch, setPitch] = useState(1); // Initial pitch is normal (1)
    const [volume, setVolume] = useState(0.5); // Initial volume is 50%
    const [fontSize, setFontSize] = useState(14); // Initial font size is 14
    const [fontStyle, setFontStyle] = useState('Arial'); // Initial font style is Arial

    return (
        <View style={styles.container}>
            {/* Header */}
            <Header title="Adjust Speech Settings" />

            {/* Scrollable Content */}
            <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollContent}>
                {/* Speech Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Speech</Text>

                    {/* Speed Row */}
                    <View style={styles.row}>
                        <Text style={styles.rowLabel}>Speed: {speed.toFixed(1)}x</Text>
                        <Slider
                            style={styles.slider}
                            minimumValue={1}
                            maximumValue={2}
                            step={0.1}
                            value={speed}
                            onValueChange={setSpeed}
                            minimumTrackTintColor="#6200ea"
                            maximumTrackTintColor="#ddd"
                            thumbTintColor="#6200ea"
                        />
                    </View>

                    {/* Pitch Row */}
                    <View style={styles.row}>
                        <Text style={styles.rowLabel}>Pitch: {pitch.toFixed(1)}</Text>
                        <Slider
                            style={styles.slider}
                            minimumValue={0.5}
                            maximumValue={2}
                            step={0.1}
                            value={pitch}
                            onValueChange={setPitch}
                            minimumTrackTintColor="#6200ea"
                            maximumTrackTintColor="#ddd"
                            thumbTintColor="#6200ea"
                        />
                    </View>

                    {/* Volume Row */}
                    <View style={styles.row}>
                        <Text style={styles.rowLabel}>Volume: {(volume * 100).toFixed(0)}%</Text>
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={1}
                            step={0.05}
                            value={volume}
                            onValueChange={setVolume}
                            minimumTrackTintColor="#6200ea"
                            maximumTrackTintColor="#ddd"
                            thumbTintColor="#6200ea"
                        />
                    </View>
                </View>

                {/* Font Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Font</Text>

                    {/* Font Size Row */}
                    <View style={styles.row}>
                        <Text style={styles.rowLabel}>Font Size: {fontSize}</Text>
                        <Slider
                            style={styles.slider}
                            minimumValue={10}
                            maximumValue={30}
                            step={1}
                            value={fontSize}
                            onValueChange={setFontSize}
                            minimumTrackTintColor="#6200ea"
                            maximumTrackTintColor="#ddd"
                            thumbTintColor="#6200ea"
                        />
                    </View>

                    {/* Font Style Row */}
                    <View style={styles.row}>
                        <Text style={styles.rowLabel}>Font Style:</Text>
                        <Picker
                            selectedValue={fontStyle}
                            style={styles.picker}
                            onValueChange={(itemValue) => setFontStyle(itemValue)}
                        >
                            <Picker.Item label="Arial" value="Arial" />
                            <Picker.Item label="Courier New" value="Courier New" />
                            <Picker.Item label="Verdana" value="Verdana" />
                            <Picker.Item label="Georgia" value="Georgia" />
                            <Picker.Item label="Times New Roman" value="Times New Roman" />
                            <Picker.Item label="Roboto" value="Roboto" />
                        </Picker>
                    </View>
                </View>
            </ScrollView>

            {/* Footer */}
            <Footer />
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
    section: {
        marginBottom: 24,
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        shadowColor: '#000000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#333333',
        textAlign: 'center',
    },
    row: {
        marginBottom: 16,
    },
    rowLabel: {
        fontSize: 16,
        marginBottom: 8,
        color: '#333333',
    },
    slider: {
        width: '100%',
        height: 40,
    },
    picker: {
        height: 50,
        width: '100%',
    },
});