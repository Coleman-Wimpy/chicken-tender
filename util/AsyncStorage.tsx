import { Coords } from '@/types/Coords';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeLocationData = async (value: Coords) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('coords', jsonValue);
    } catch (e) {
      console.log("Error while saving to Async Storage: ", e)
    }
  };

export const getCoordsData = async () => {
    try {
      const coords = await AsyncStorage.getItem('coords');
      return coords != null ? JSON.parse(coords) : null;
    } catch (e) {
        console.log("Error while reading Coords from Async Storage: ", e)
    }
  };