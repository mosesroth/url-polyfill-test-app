import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import { Stack } from 'expo-router';
import 'react-native-url-polyfill';

export default function URLTestScreen() {
  const [testResults, setTestResults] = useState<Array<{name: string, result: string, success: boolean}>>([]);

  const runTests = () => {
    const results: Array<{name: string, result: string, success: boolean}> = [];
    
    try {
      // Test 1: Basic URL parsing
      const url1 = new URL('https://example.com/path?query=string#hash');
      results.push({
        name: 'Basic URL parsing',
        result: `Protocol: ${url1.protocol}, Host: ${url1.host}, Pathname: ${url1.pathname}, Search: ${url1.search}, Hash: ${url1.hash}`,
        success: true
      });
    } catch (error) {
      results.push({
        name: 'Basic URL parsing',
        result: `Error: ${error instanceof Error ? error.message : String(error)}`,
        success: false
      });
    }

    try {
      // Test 2: URL with parameters
      const url2 = new URL('https://example.com/search');
      url2.searchParams.append('q', 'test query');
      url2.searchParams.append('page', '1');
      results.push({
        name: 'URL with parameters',
        result: `URL: ${url2.toString()}, Query: ${url2.searchParams.get('q')}, Page: ${url2.searchParams.get('page')}`,
        success: true
      });
    } catch (error) {
      results.push({
        name: 'URL with parameters',
        result: `Error: ${error instanceof Error ? error.message : String(error)}`,
        success: false
      });
    }

    try {
      // Test 3: Relative URL
      const baseUrl = new URL('https://example.com/base/path/');
      const relativeUrl = new URL('../relative/path', baseUrl);
      results.push({
        name: 'Relative URL',
        result: `Resolved URL: ${relativeUrl.toString()}`,
        success: true
      });
    } catch (error) {
      results.push({
        name: 'Relative URL',
        result: `Error: ${error instanceof Error ? error.message : String(error)}`,
        success: false
      });
    }

    try {
      // Test 4: URL manipulation
      const url4 = new URL('https://example.com');
      url4.pathname = '/products';
      url4.searchParams.append('category', 'electronics');
      url4.searchParams.append('sort', 'price');
      results.push({
        name: 'URL manipulation',
        result: `Modified URL: ${url4.toString()}`,
        success: true
      });
    } catch (error) {
      results.push({
        name: 'URL manipulation',
        result: `Error: ${error instanceof Error ? error.message : String(error)}`,
        success: false
      });
    }

    try {
      // Test 5: Special characters in URL
      const url5 = new URL('https://example.com/search');
      url5.searchParams.append('q', 'special chars: !@#$%^&*()');
      results.push({
        name: 'Special characters in URL',
        result: `URL with special chars: ${url5.toString()}`,
        success: true
      });
    } catch (error) {
      results.push({
        name: 'Special characters in URL',
        result: `Error: ${error instanceof Error ? error.message : String(error)}`,
        success: false
      });
    }

    setTestResults(results);
  };

  useEffect(() => {
    runTests();
  }, []);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'URL Polyfill Test' }} />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>URL Polyfill Test for Fire OS</Text>
        <Text style={styles.subtitle}>Testing react-native-url-polyfill functionality</Text>
        
        <Button title="Run Tests Again" onPress={runTests} />
        
        <View style={styles.resultsContainer}>
          <Text style={styles.resultsTitle}>Test Results:</Text>
          {testResults.map((test, index) => (
            <View key={index} style={styles.testResult}>
              <Text style={styles.testName}>{test.name}</Text>
              <Text style={[styles.testStatus, test.success ? styles.success : styles.failure]}>
                {test.success ? '✓ Success' : '✗ Failed'}
              </Text>
              <Text style={styles.testOutput}>{test.result}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
    color: '#666',
  },
  resultsContainer: {
    marginTop: 24,
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  testResult: {
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  testName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  testStatus: {
    fontSize: 14,
    marginVertical: 4,
    fontWeight: 'bold',
  },
  success: {
    color: 'green',
  },
  failure: {
    color: 'red',
  },
  testOutput: {
    fontSize: 14,
    marginTop: 4,
  },
});
