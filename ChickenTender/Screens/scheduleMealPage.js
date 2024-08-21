import { Text, View} from 'react-native';
import "../global.css"
import { ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ScheduleMealPage() {
  return (
    <ImageBackground source={require('../assets/appBackground.jpg')} style={{ width: '100%', height: '100%' }} className="flex-1 bg-slate-200 items-center justify-center">
      <StatusBar style="light" hidden={false} animated={true}></StatusBar>
      <View className="rounded-md items-center justify-center bg-slate-500 p-2">
        <Text className="text-orange-500 font-bold">Schedule Meal Page</Text>
      </View>
    </ImageBackground>
  );
}
