import { Button, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getLocation } from '@/util/Geocoder';
import { useState } from 'react';

export default function HomeScreen() {
  let [text, setText] = useState<string>()

  return (
    <SafeAreaView style={styles.pageContainer}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText>Find A Feast</ThemedText>
      </ThemedView>
      <ThemedView style={styles.locationContainer}>
        <ThemedText>Location</ThemedText>
        <Button title={'Get Coords'} onPress={() => {
          getLocation().then((coords) => {
            if(coords) {
              setText(JSON.stringify(coords))
            } else {
              setText("Unable to get location.")
            }
          })
        }}/>
        <ThemedText>{text}</ThemedText>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  locationContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  searchBar: {
    backgroundColor: 'blue'
  }
});
