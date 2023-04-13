import * as React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function EventTracker() {
  const navigation = useNavigation();

  const [reservedEvents, setReservedEvents] = React.useState([]);

  const reserveEvent = (eventId) => {
    setReservedEvents([...reservedEvents, eventId]);
  };

  const isEventReserved = (eventId) => {
    return reservedEvents.includes(eventId);
  };

  const events = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/1294477039/vector/metaphor-bipolar-disorder-mind-mental-double-face-split-personality-concept-mood-disorder-2.jpg?s=612x612&w=0&k=20&c=JtBxyFapXIA63hzZk_F5WNDF92J8fD2gIFNX3Ta4U3A=",
      title: "Mental Health Awareness",
      date: "10th April 2023",
      time: "8:00 PM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      image:
        "https://marketplace.canva.com/EAFK9tPCQy0/1/0/1131w/canva-purple-orange-playful-illustration-self-care-poster-Pm1qg6qDAoY.jpg",

      title: "Self Care 101",
      date: "April 15, 2023",
      time: "7:00 PM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      image:
        "https://cdna.artstation.com/p/assets/images/images/022/482/150/large/morgan-akkerman-a7.jpg?1575580900",
      title: "Reach out, seek help.",
      date: "May 13, 2023",
      time: "6:00 PM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      image:
        "https://www.gallagherbassett.co.nz/app/uploads/2020/09/Integrated-Wellness-Mental-Health-Matters-960x1400.png",
      title: "Mental Health Matters",
      date: "June 22, 2023",
      time: "6:30 PM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      image:
        "https://static.vecteezy.com/system/resources/previews/015/253/482/original/a-set-of-positive-quotes-for-people-with-mental-health-problems-phrase-for-posters-t-shirts-wall-art-heart-flowers-notes-and-more-for-decoration-illustration-vector.jpg",
      title: "Health is Wealth",
      date: "July 30, 2023",
      time: "7:00 PM",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \n\nDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];



  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Events</Text>

        {events.map((event) => (
          <View key={event.id} style={styles.eventDetails}>
            <Text style={styles.title}>{event.title}</Text>

            <View style={styles.eventContainer}>
              <Image source={{ uri: event.image }} style={styles.image} />
            </View>
            <View>
              <Text style={styles.secSubtitle}>About Event</Text>
              <Text style={styles.description}>{event.description}</Text>
              <Text style={styles.date}>
               {event.date}, {event.time}
              </Text>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Reserve</Text>
              </TouchableOpacity>
              <View
                style={{
                  borderBottomColor: "#6658c5",
                  borderBottomWidth: 1,
                  width: 310,
                  marginTop: 24,
                  marginBottom: 24,
                }}
              />
            </View>
          </View>
        ))}

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
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 19,
    fontFamily: "Gilroy-Medium",
    color: "#6658c5",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 25,
    marginTop: 64,
  },
  secSubtitle: {
    fontSize: 20,
    fontFamily: "Gilroy-Medium",
    color: "#6658c5",
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 20,
  },
  eventContainer: {
    flexDirection: "column",
    alignItems: "center",
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
    marginLeft: 35,
  },
  title: {
    fontSize: 25,
    fontWeight: 600,
    fontFamily: "Gilroy-Bold",
    marginBottom: 17,
    textAlign: "left",
    marginTop: 7,
    color: "#6658c5",
  },
  date: {
    fontSize: 18,
    fontFamily: "Gilroy-Bold",
    marginBottom: 5,
    textAlign: "left",

    color: "#252628",
    marginTop: 10,
  },
  time: {
    fontSize: 17,
    marginBottom: 5,
    textAlign: "left",
    marginLeft: 35,
  },
  description: {
    fontSize: 17,
    fontFamily: "Gilroy-Medium",
    lineHeight: 20,
    color: "#252628",
    // textAlign: "justify",
    marginBottom: 20,
    marginRight: 35,
  },
  button: {
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: "#09866e",
    borderColor: "#09866e",
    padding: 10,
    width: 130,
    marginBottom: 5,
    marginTop: 20,
  },
  buttonText: {
    fontFamily: "Gilroy-Bold",
    fontSize: 19,
    color: "#fff",
    textAlign: "center",
  },
  
  
});
