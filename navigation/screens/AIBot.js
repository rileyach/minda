import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState, useRef } from "react";
import axios from "axios";
import { ScrollView } from "react-native-gesture-handler";
import { apiKey } from "../config";
const keywords = ["hotline", "I feel suicidal", "suicidal", "i wanna commit suicide", "I want to kill myself"];

const sendIcon = require("../public/sendicon.png");

const ChatGPT = () => {
  const [data, setDate] = useState([
    {
      type: "bot",
      text: "Hi there! I am SITI, a mental health expert. How can I help you today?",
    },
  ]);
  const apiUrl =
    "https://api.openai.com/v1/engines/text-davinci-003/completions";
  const [textInput, setTextInput] = useState("");
  const scrollViewRef = useRef();

  const handleSend = async () => {
    setTextInput("");
    const prompt = `As an AI your name will be SITI that is programmed to be a mental health expert based in Brunei, you will answer question based on mental health enquiries accordingly. Keep your answers short and simple. Keep the topic about mental health.: ${textInput}\nA:`;
    Keyboard.dismiss();
    if (keywords.some((keyword) => textInput.toLowerCase().includes(keyword))) {
      setDate([
        ...data,
        { type: "user", text: textInput },
        {
          type: "bot",
          text: 'For Bruneis local hotline: Please contact 145. It is called "Panggilan Hope". Here are some physical counselling or therapy companies available near you - Mental Health Unit , Ministry of Health +673 245 4644, EMPOWERIOR: +673 877 8754, CLARITY: +673 863 7750, alternatively, if you would like to communicate virtually, here are a few international options: Betterhelp, Talkspace, Cerebral.',
        },
      ]);
    } else {
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
      setDate([...data, { type: "user", text: textInput }]);
      const response = await axios.post(
        apiUrl,
        {
          prompt: prompt,
          max_tokens: 550,
          temperature: 0.5,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const text = response.data.choices[0].text.trim();
      setDate([
        ...data,
        { type: "user", text: textInput },
        { type: "bot", text: `${text}` },
      ]);
    }

    setTextInput("");
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../public/botchar.png")}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Siti</Text>
        <ScrollView style={styles.body} ref={scrollViewRef} showsVerticalScrollIndicator={false}>
          <View style={styles.messages}>
            {data.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.message,
                  item.type === "user" ? styles.user : styles.bot,
                ]}
              >
                <Text style={styles.text}>{item.text}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={textInput}
            onChangeText={setTextInput}
            // placeholder="Ask me anything..."
          />
          <TouchableOpacity style={styles.button} onPress={handleSend}>
            <Image source={sendIcon} style={styles.buttonImage} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0eef9",

    // marginVertical: 8,
    alignSelf: "center",
    // marginTop: 60,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    // paddingBottom: 30,
  },
  title: {
    fontSize: 19,
    fontFamily: "Gilroy-Medium",
    color: "#6658c5",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 64,
  },
  body: {
    backgroundColor: "#fffc9",
    width: "100%",
  },
  messages: {
    padding: 40,
    fontSize: 20,
  },
  message: {
    borderRadius: 10,
    maxWidth: "100%",

    marginBottom: 18,
    padding: 15,
  },
  user: {
    alignSelf: "flex-end",
    backgroundColor: "#ffe4c2",
    width: "100%",
  },
  bot: {
    alignSelf: "flex-start",
    backgroundColor: "#d1cdee",
    width: "100%",
  },
  text: {
    color: "#000",
    fontSize: 17.5,
    fontWeight: 400,
    fontFamily: "Gilroy-Medium",
    lineHeight: 25,
    width: "100%",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 3,
    // marginBottom: 45,
    backgroundColor: "#252628",
  },
  input: {
    borderWidth: 1,
    // borderColor: "#ffa433",
    fontFamily: "Gilroy-Medium",
    width: "80%",
    height: 40,
    // marginBottom: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: "whitesmoke",
    left: 9,
    fontSize: 17,
  },
  button: {
    // backgroundColor: "#272729",
    width: "18%",
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  buttonImage: {
    tintColor: "white",
    resizeMode: "contain",
    top: 5,
    left: 8,
    width: 25,
    height: 25,
  },
  imageContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 150,
    height: 150,
    marginBottom: 250,
  },
  image: {
    width: "100%",
    height: "170%",
    left: 10,
    top: 80,
  },
});

export default ChatGPT;
