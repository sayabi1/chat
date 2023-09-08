import { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Bubble, GiftedChat } from "react-native-gifted-chat";

const Chat = ({ route, navigation }) => {
  /* setting messages as a state to send and recive messages from diffrent users */
  const [messages, setMessages] = useState([]);
  const { name, color } = route.params;
  const onSend = (newMessages) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#000",
          },
          left: {
            backgroundColor: "#FFF",
          },
        }}
      />
    );
  };
  useEffect(() => {
    navigation.setOptions({ title: name });
    /* Messages must follow a certain format to work with the Gifted Chat library.*/
    setMessages([
      {
        _id: 1,
        text: "Hi there",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
      {
        _id: 2,
        text: "this is a system message",
        system: true,
      },
    ]);
  }, []);
  return (
    <View style={{ flex: 1, backgroundColor: color }}>
      <GiftedChat
        messages={messages}
        renderBubble={renderBubble}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
          name,
        }}
      />
      {Platform.OS === "android" ? (
        <KeyboardAvoidingView behavior="height" />
      ) : null}
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView behavior="padding" />
      ) : null}
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
