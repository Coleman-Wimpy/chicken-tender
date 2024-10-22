import { View, Button } from 'react-native';
import { styled } from 'nativewind';

const StyledButton = styled(Button);

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center">
      <StyledButton
        title="Find a Feast"
        onPress={() => console.log("Button Pressed")}
      />
    </View>
  );
}
