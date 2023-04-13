import * as React from "react";
import {
  StyleSheet,
  Image,
  Platform,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function EventTracker() {
  const navigation = useNavigation();

   const [expanded, setExpanded] = React.useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Welcome back!</Text>
          <Image
            source={require("../public/howareyou.png")}
            style={styles.okaycard}
          />
          <Text style={styles.subtitle}>How are you feeling today?</Text>
          <View
            style={{
              height: 100,
              marginTop: 10,
              marginBottom: 15,
              marginLeft: 35,
            }}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={{ flexDirection: "row" }}>
                <View style={{ height: 100, width: 75, marginRight: 30 }}>
                  <Image
                    source={require("../../assets/icons/happy.png")}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: "cover",
                    }}
                  />
                </View>
                <View style={{ height: 100, width: 75, marginRight: 30 }}>
                  <Image
                    source={require("../../assets/icons/calm.png")}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: "cover",
                    }}
                  />
                </View>
                <View style={{ height: 100, width: 75, marginRight: 30 }}>
                  <Image
                    source={require("../../assets/icons/relax.png")}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: "cover",
                    }}
                  />
                </View>
                <View style={{ height: 100, width: 75, marginRight: 30 }}>
                  <Image
                    source={require("../../assets/icons/sad.png")}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: "cover",
                    }}
                  />
                </View>
              </View>
            </ScrollView>
          </View>

          <Text style={styles.subtitle}>Upcoming Events</Text>
        </View>

        {/* EVENTS TAB */}

        <View
          style={{
            backgroundColor: "#D1CDE5",
            marginLeft: 35,
            marginBottom: 20,
            borderRadius: 10,
            height: 200,
            width: 320,
          }}
        >
          <TouchableOpacity style={styles.card}>
            <Text
              style={{
                fontFamily: "Gilroy-Bold",
                color: "#645BA7",
                fontSize: 22,
                marginLeft: 18,
                marginTop: 18,
                paddingBottom: 7,
              }}
            >
              Name of the event
            </Text>
            <Text
              style={{
                padding: 10,
                backgroundColor: "#645BA7",
                fontFamily: "Gilroy-Bold",
                fontSize: 20,
                color: "#fff",
                width: 75,
                height: 60,
                left: 245,
                bottom: 97,
                overflow: "hidden",
                position: "absolute",
              }}
            >
              APRIL 12
            </Text>
            <Text
              style={{
                paddingLeft: 18,
                paddingRight: 18,
                width: "70%",
                fontFamily: "Gilroy-Regular",
                fontSize: 16,
                lineHeight: 17,
              }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy..
            </Text>
            <TouchableOpacity
              style={{
                marginLeft: 17,
                marginTop: 22,
                color: "#645BA7",
                borderWidth: 1,
                borderColor: "#645BA7",
                borderRadius: 20,
                backgroundColor: "#645BA7",
                width: 140,
                height: 40,
                color: "#645BA7",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Gilroy-Bold",
                  color: "#fff",
                  paddingLeft: 18,
                  fontSize: 17,
                }}
              >
                READ MORE
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        <View
          style={{
            backgroundColor: "#B2DAD3",
            marginLeft: 35,
            marginBottom: 20,
            borderRadius: 10,
            height: 200,
            width: 320,
          }}
        >
          <TouchableOpacity style={styles.card}>
            <Text
              style={{
                fontFamily: "Gilroy-Bold",
                color: "#09866E",
                fontSize: 22,
                marginLeft: 18,
                marginTop: 18,
                paddingBottom: 7,
              }}
            >
              Name of the event
            </Text>
            <Text
              style={{
                padding: 10,
                backgroundColor: "#09866E",
                fontFamily: "Gilroy-Bold",
                fontSize: 20,
                color: "#fff",
                width: 75,
                height: 60,
                left: 245,
                bottom: 97,
                overflow: "hidden",
                position: "absolute",
              }}
            >
              APRIL 15
            </Text>
            <Text
              style={{
                paddingLeft: 18,
                paddingRight: 18,
                width: "70%",
                fontFamily: "Gilroy-Regular",
                fontSize: 16,
                lineHeight: 17,
              }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy..
            </Text>
            <TouchableOpacity
              style={{
                marginLeft: 17,
                marginTop: 22,
                color: "#645BA7",
                borderWidth: 1,
                borderColor: "#09866E",
                borderRadius: 20,
                backgroundColor: "#09866E",
                width: 140,
                height: 40,
                color: "#645BA7",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Gilroy-Bold",
                  color: "#fff",
                  paddingLeft: 18,
                  fontSize: 17,
                }}
              >
                READ MORE
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#FEE2C2",
            marginLeft: 35,
            marginBottom: 20,
            borderRadius: 10,
            height: 200,
            width: 320,
          }}
        >
          <TouchableOpacity style={styles.card}>
            <Text
              style={{
                fontFamily: "Gilroy-Bold",
                color: "#F8A139",
                fontSize: 22,
                marginLeft: 18,
                marginTop: 18,
                paddingBottom: 7,
              }}
            >
              Name of the event
            </Text>
            <Text
              style={{
                padding: 10,
                backgroundColor: "#F8A139",
                fontFamily: "Gilroy-Bold",
                fontSize: 20,
                color: "#fff",
                width: 75,
                height: 60,
                left: 245,
                bottom: 97,
                overflow: "hidden",
                position: "absolute",
              }}
            >
              APRIL 22
            </Text>
            <Text
              style={{
                paddingLeft: 18,
                paddingRight: 18,
                width: "70%",
                fontFamily: "Gilroy-Regular",
                fontSize: 16,
                lineHeight: 17,
              }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy..
            </Text>
            <TouchableOpacity
              style={{
                marginLeft: 17,
                marginTop: 22,
                color: "#645BA7",
                borderWidth: 1,
                borderColor: "#F8A139",
                borderRadius: 20,
                backgroundColor: "#F8A139",
                width: 140,
                height: 40,
                color: "#645BA7",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Gilroy-Bold",
                  color: "#fff",
                  paddingLeft: 18,
                  fontSize: 17,
                }}
              >
                READ MORE
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#FCDFD9",
            marginLeft: 35,
            marginBottom: 20,
            borderRadius: 10,
            height: 200,
            width: 320,
          }}
        >
          <TouchableOpacity style={styles.card}>
            <Text
              style={{
                fontFamily: "Gilroy-Bold",
                color: "#F69984",
                fontSize: 22,
                marginLeft: 18,
                marginTop: 18,
                paddingBottom: 7,
              }}
            >
              Name of the event
            </Text>
            <Text
              style={{
                padding: 10,
                backgroundColor: "#F69984",
                fontFamily: "Gilroy-Bold",
                fontSize: 20,
                color: "#fff",
                width: 75,
                height: 60,
                left: 245,
                bottom: 97,
                overflow: "hidden",
                position: "absolute",
              }}
            >
              MAY 15
            </Text>
            <Text
              style={{
                paddingLeft: 18,
                paddingRight: 18,
                width: "70%",
                fontFamily: "Gilroy-Regular",
                fontSize: 16,
                lineHeight: 17,
              }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy..
            </Text>
            <TouchableOpacity
              style={{
                marginLeft: 17,
                marginTop: 22,
                color: "#645BA7",
                borderWidth: 1,
                borderColor: "#F69984",
                borderRadius: 20,
                backgroundColor: "#F69984",
                width: 140,
                height: 40,
                color: "#645BA7",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Gilroy-Bold",
                  color: "#fff",
                  paddingLeft: 18,
                  fontSize: 17,
                }}
              >
                READ MORE
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "#D1CDE5",
            marginLeft: 35,
            marginBottom: 20,
            borderRadius: 10,
            height: 200,
            width: 320,
          }}
        >
          <TouchableOpacity style={styles.card}>
            <Text
              style={{
                fontFamily: "Gilroy-Bold",
                color: "#645BA7",
                fontSize: 22,
                marginLeft: 18,
                marginTop: 18,
                paddingBottom: 7,
              }}
            >
              Name of the event
            </Text>
            <Text
              style={{
                padding: 10,
                backgroundColor: "#645BA7",
                fontFamily: "Gilroy-Bold",
                fontSize: 20,
                color: "#fff",
                width: 75,
                height: 60,
                left: 245,
                bottom: 97,
                overflow: "hidden",
                position: "absolute",
              }}
            >
              MAY 30
            </Text>
            <Text
              style={{
                paddingLeft: 18,
                paddingRight: 18,
                width: "70%",
                fontFamily: "Gilroy-Regular",
                fontSize: 16,
                lineHeight: 17,
              }}
            >
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy..
            </Text>
            <TouchableOpacity
              style={{
                marginLeft: 17,
                marginTop: 22,
                color: "#645BA7",
                borderWidth: 1,
                borderColor: "#645BA7",
                borderRadius: 20,
                backgroundColor: "#645BA7",
                width: 140,
                height: 40,
                color: "#645BA7",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Gilroy-Bold",
                  color: "#fff",
                  paddingLeft: 18,
                  fontSize: 17,
                }}
              >
                READ MORE
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        {/* END OF EVENTS TAB */}

        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            onPress={() => navigation.navigate("Events")}
            style={{
              fontSize: 26,
              fontWeight: "bold",
            }}
          ></Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0eef9",
    paddingTop: 40,
  },
  header: {
    fontSize: 29,
    fontFamily: "Gilroy-Bold",
    textAlign: "left",
    fontWeight: 700,
    marginLeft: 34,
    marginBottom: 15,
    marginTop: 27,
  },
  subtitle: {
    fontSize: 19,
    fontFamily: "Gilroy-Medium",
    textAlign: "left",
    fontWeight: 400,
    marginBottom: 15,
    marginTop: 15,
    marginLeft: 35,
  },
  eventContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 40,
  },
  image: {
    width: 320,
    height: 200,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  eventDetails: {
    marginTop: 10,
    alignItems: "left",
  },
  title: {
    fontSize: 21,
    fontWeight: 600,
    fontFamily: "Gilroy-Bold",
    marginBottom: 5,
    textAlign: "left",
    marginTop: 7,
    marginLeft: 35,
    color: "#00876f",
  },
  date: {
    fontSize: 18,
    fontWeight: 400,
    marginBottom: 5,
    textAlign: "left",
    marginLeft: 35,
    color: "#00876f",
  },
  time: {
    fontSize: 17,
    marginBottom: 5,
    textAlign: "left",
    marginLeft: 35,
  },
  description: {
    fontSize: 17,
    fontFamily: "Gilroy-Regular",
    lineHeight: 22,
    color: "#000",
    textAlign: "justify",
    marginLeft: 35,
    marginRight: 35,
  },
  okaycard: {
    width: 320,
    height: 260,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    left: 35,
    bottom: 10,
  },
  // card: {
  //   backgroundColor: "#D1CDE5",
  //   marginLeft: 35,
  //   marginBottom: 20,
  //   borderRadius: 10,
  //   height: 200,
  //   width: 320,
  // },
  // cardText: {
  //   fontFamily: "Gilroy-Bold",
  //   color: "#645BA7",
  //   fontSize: 22,
  //   marginLeft: 18,
  //   marginTop: 18,
  //   paddingBottom: 7,
  // },
  // cardDes: {
  //   paddingLeft: 18,
  //   paddingRight: 18,
  //   width: "70%",
  //   fontFamily: "Gilroy-Regular",
  //   fontSize: 16,
  //   lineHeight: 17,
  // },
  // cardRead: {
  //   fontFamily: "Gilroy-Bold",
  //   color: "#fff",
  //   paddingLeft: 18,
  //   fontSize: 17,
  // },
  // cardButton: {
  //   marginLeft: 17,
  //   marginTop: 22,
  //   color: "#645BA7",
  //   borderWidth: 1,
  //   borderColor: "#645BA7",
  //   borderRadius: 20,
  //   backgroundColor: "#645BA7",
  //   width: 140,
  //   height: 40,
  //   color: "#645BA7",
  //   alignContent: "center",
  //   justifyContent: "center",
  // },
  // cardDate: {
  //   padding: 10,
  //   backgroundColor: "#645BA7",
  //   fontFamily: "Gilroy-Bold",
  //   fontSize: 20,
  //   color: "#fff",
  //   width: 75,
  //   height: 60,
  //   left: 245,
  //   bottom: 120,
  //   overflow: "hidden",
  //   position: "absolute",
  // },
});
