import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

const image = require("../media/background-image.png");

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#B9C6AE");
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.appTitle}>chat me!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Type your Username here"
          />
          <Text style={styles.colorSelectorText}>Text Color Selector</Text>
          <View style={styles.colorSelectorContainer}>
            <TouchableOpacity
              style={[
                styles.circle,
                color === "#474056",
                { backgroundColor: "#474056" },
              ]}
              onPress={() => setColor("#474056")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.circle,
                color === "#757083",
                { backgroundColor: "#757083" },
              ]}
              onPress={() => setColor("#757083")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.circle,
                color === "#8A95A5",
                { backgroundColor: "#8A95A5" },
              ]}
              onPress={() => setColor("#8A95A5")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.circle,
                color === "#B9C6AE",
                { backgroundColor: "#B9C6AE" },
              ]}
              onPress={() => setColor("#B9C6AE")}
            ></TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Chat", { name: name, color: color })
            }
          >
            <Text style={styles.buttonText}>Start Chating</Text>
          </TouchableOpacity>
        </View>
        {Platform.OS === "ios" ? (
          <KeyboardAvoidingView behavior="padding" />
        ) : null}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    padding: 10,
  },
  appTitle: {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  textInput: {
    fontSize: 16,
    fontWeight: "300",
    width: "88%",
    opacity: 50,
    padding: 15,
    borderColor: "#757083",
    borderWidth: 2,
  },
  colorSelectorContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  colorSelectorText: {
    fontSize: 16,
    fontWeight: "300",
    color: "#8A95A5",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  selectedCircle: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#757083",
    padding: 15,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  image: {
    flex: 1,
    justifyContent: "space-between",
  },
});

export default Start;
