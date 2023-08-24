import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const Chat = ({ route, navigation }) => {
  const { name, color } = route.params;
  useEffect(() => {
    navigation.setOptions({ title: name });
  }, []);
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text>Hello Chat!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 45,
  },
});

export default Chat;
