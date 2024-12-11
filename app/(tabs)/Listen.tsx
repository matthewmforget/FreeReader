import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import Header from '../../components/Header'; // Import Header
import Footer from '../../components/Footer'; // Import Footer

const SimplePage = () => {
  return (
    <View style={styles.container}>
      <Header title="Listen"/> {/* Render Header */}
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.text}>
          Text will display here
        </Text>
        {/* Add more text or components here */}
      </ScrollView>
      <Footer /> {/* Render Footer */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Background color for the entire page
  },
  scrollView: {
    padding: 16,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333', // Text color
  },
});