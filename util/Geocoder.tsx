import { Coords } from '@/types/Coords';
import * as Location from 'expo-location';

export function getLocation(): Promise<Coords> {
    return Location.requestForegroundPermissionsAsync().then((status) => {
        if (status.granted) {
            return Location.getCurrentPositionAsync({}).then((location) => {
                console.log("Location info: " + JSON.stringify(location))
                let coords: Coords = {
                    lat: location.coords.latitude,
                    lon: location.coords.longitude
                }
                return coords
            }).catch((error) => {
                console.log("Exception getting user location: " + error)
                let coords: Coords = {
                    lat: null,
                    lon: null
                }
                return coords
            })
        } else {
            console.log("Location permission denied, cannot get user location.")
            let coords: Coords = {
                lat: null,
                lon: null
            }
            return coords
        }
    }).catch((error) => {
        console.log("Exception getting permission: " + error)
        let coords: Coords = {
            lat: null,
            lon: null
        }
        return coords
    })
}