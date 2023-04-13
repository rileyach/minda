// import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");
const circleWidth = width;

export default function App() {
  const [breathing, setBreathing] = useState(false); // breathing
  const [buttonColor, setButtonColor] = useState(null); // start stop changes
  const move = useRef(new Animated.Value(0)).current;
  const textOpacity = useRef(new Animated.Value(1)).current;

  const toggleBreathing = () => {
    if (!breathing) {
      Animated.loop(
        Animated.sequence([
          Animated.parallel([
            Animated.timing(textOpacity, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true,
            }),
            Animated.timing(move, {
              toValue: 1,
              duration: 4000,
              useNativeDriver: true,
            }),
          ]),

          Animated.parallel([
            Animated.timing(textOpacity, {
              delay: 100,
              toValue: 0,
              duration: 300,
              useNativeDriver: true,
            }),
            Animated.timing(move, {
              delay: 1000,
              toValue: 0,
              duration: 4000,
              useNativeDriver: true,
            }),
          ]),
        ])
      ).start();
    } else {
      move.stopAnimation();
      textOpacity.stopAnimation();
      move.setValue(0);
      textOpacity.setValue(1);
    }
    setBreathing(!breathing);
  };

  const translate = move.interpolate({
    inputRange: [0, 1],
    outputRange: [0, circleWidth / 6],
  });

  const exhale = textOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <View style={styles.container}>
      <View>
      <Text style={{
            fontSize: 19,
            fontWeight: 700,
            color: "#6658c5",
            fontFamily: "Gilroy-Medium",
            bottom: 239,
            justifyContent: "center",
            textAlign: "center",
          }}>Breathe</Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 700,
            fontFamily: "Gilroy-Bold",
            bottom: 160,
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Ease your mind.
        </Text>
      </View>
      <Animated.View
        style={{
          width: circleWidth,
          height: circleWidth,
          ...StyleSheet.absoluteFill,
          alignItems: "center",
          justifyContent: "center",
          opacity: textOpacity,
          zIndex: 1,
          // bottom: '20%',
          // left: circleWidth / 90,
          // top: circleWidth / 70,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: 700,
            fontFamily: "Gilroy-Bold",
            bottom: -163,
            color: "#fff",
          }}
        >
          Inhale
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          width: circleWidth,
          height: circleWidth,
          ...StyleSheet.absoluteFill,
          alignItems: "center",
          justifyContent: "center",
          opacity: exhale,
          zIndex: 1,
          // left: circleWidth / 90,
          // top: circleWidth / 70,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: 700,
            fontFamily: "Gilroy-Bold",
            bottom: -163,
            color: "#fff",
          }}
        >
          Exhale
        </Text>
      </Animated.View>

      {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
        const rotation = move.interpolate({
          inputRange: [0, 1],
          outputRange: [`${item * 45}deg`, `${item * 45 + 180}deg`],
        });
        return (
          <Animated.View
            key={item}
            style={{
              opacity: 0.5,
              alignContent: "center",
              backgroundColor: "#6658c5",
              width: circleWidth / 2,
              height: circleWidth / 2,
              borderRadius: circleWidth / 2,
              ...StyleSheet.absoluteFill,
              left: circleWidth / 4,
              top: circleWidth / 1.5,

              transform: [
                {
                  rotateZ: rotation,
                },
                {
                  translateX: translate,
                },
                {
                  translateY: translate,
                },
              ],
            }}
          ></Animated.View>
        );
      })}
      <TouchableOpacity
        style={[
    styles.startButton,
    breathing && styles.startButtonStop,
  ]}
        onPress={toggleBreathing}
      >
        <Text style={[
      styles.startButtonText,
      breathing && styles.startButtonTextStop,
    ]}
  >
          {breathing ? "STOP" : "START"}
        </Text>
      </TouchableOpacity>
      <View>
        <Text
          onPress={() => navigation.navigate("Breathe")}
          style={{ fontSize: 26, fontWeight: "bold" }}
        ></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0eef9",
    alignItems: "center",
    justifyContent: "center",
    // left: width / 4,
    // top: height / 4,
  },

  startButtonText: {
    color: "#6658c5",
    fontSize: 20,
    fontFamily: "Gilroy-Bold",
    fontWeight: 700,
    alignContent: "center",
    justifyContent: "center",
    letterSpacing: 1,
  },
  startButton: {
    backgroundColor: null,
    borderColor: "#6658c5",
    borderWidth: 1,
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 50,
    // right: width / 4,
    top: 300,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 25,
    
  },
  startButtonTextStop: {
    color: "#f0eef9",
    paddingHorizontal: 5,
  },
  startButtonStop: {
    backgroundColor: "#6658c5",
    borderColor: "#6658c5",
  },
});
