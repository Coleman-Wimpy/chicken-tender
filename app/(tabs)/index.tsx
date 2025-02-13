import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getLocation } from '@/util/Geocoder';
import { useState } from 'react';
import { getCoordsData } from '@/util/AsyncStorage';
import { Coords } from '@/types/Coords';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SearchBar } from '@rneui/themed';

export default function HomeScreen() {
  let [text, setText] = useState<string>()
  let savedCoords: Coords
  getCoordsData().then((coords) => {
    if(coords != null) {
      console.log('Updating text to coords: ', coords)
      savedCoords = coords
      setText(coords)
    }
  }).catch((e) => {console.log("Unable to get saved coords. ", e)})

  return (
    <SafeAreaView style={styles.pageContainer}>
      <ThemedView style={styles.locationContainer}>
        <SearchBar placeholder='Enter Location' value={text} round containerStyle={styles.searchBar} clearIcon={null} searchIcon={null}/>
        <TouchableOpacity style={styles.currentLocButton} onPress={() => {
          getLocation().then((coords) => {
            if(coords) {
              setText(JSON.stringify(coords))
              console.log('Setting searchbar text to ', coords)
            } else {
              setText("Unable to get location.")
            }
          })
        }}> 
          <IconSymbol size={36} name="location.circle" color={'#FFA500'} />
        </TouchableOpacity>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  locationContainer: {
    flexDirection: 'row',
    maxHeight: '10%',
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'space-between'
  },
  searchBar: {
    justifyContent: 'flex-start',
    alignContent: 'center',
    width: '80%',
    padding: 0,
    backgroundColor: 'white',
    borderColor: 'white'
  },
  currentLocButton: {
    justifyContent: 'flex-end',
    alignSelf: 'center',
    marginEnd: 10
  }
});