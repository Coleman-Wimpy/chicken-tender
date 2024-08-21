import { Text, View} from 'react-native';
import "../global.css"
import { ImageBackground } from 'react-native';

export default function FindFoodPage() {
  return (
    <ImageBackground source={require('../assets/appBackground.jpg')} style={{ width: '100%', height: '100%' }} className="flex-1 bg-slate-200 items-center justify-center">
      <View className="rounded-md items-center justify-center bg-slate-500 p-2">
        <Text className="text-orange-500 font-bold">Chicken Tender</Text>
      </View>
    </ImageBackground>
  );
}
