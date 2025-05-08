# URL Polyfill Test App for Fire OS

This app demonstrates the integration of [react-native-url-polyfill](https://github.com/charpeni/react-native-url-polyfill) with an Expo React Native application, specifically targeting Fire OS devices.

## Purpose

The purpose of this test app is to verify that the URL API polyfill works correctly on Fire OS devices, which may have limited or inconsistent support for the standard URL API.

## Features

- Tests basic URL parsing functionality
- Tests URL parameter manipulation
- Tests relative URL resolution
- Tests URL manipulation and modification
- Tests handling of special characters in URLs

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build and run on Android (including Fire OS devices):
   ```bash
   npx expo run:android
   ```

## Implementation Details

- The app uses `react-native-url-polyfill` to provide URL API support
- The polyfill is imported at the root level in `_layout.tsx`
- A dedicated test screen (`url-test.tsx`) runs various URL API tests and displays the results

## Expected Results

All tests should pass on Fire OS devices, demonstrating that the URL API polyfill is working correctly.
