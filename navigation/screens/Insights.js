// import * as React from "react";
// import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import Collapsible from "react-native-collapsible";

const sections = [
  {
    title: "Depression",
    content:
      "Symptoms: \nSadness, Hopelessness, Loss of Interest\n\n\Description: \nA mood disorder that causes a persistent feeling of sadness and loss of interest in activities that were once enjoyable.\n\nTips: \nSeek professional help, stay active and engaged, practice self-care, and seek support from friends and family.",
  },
  {
    title: "Anxiety",
    content:
      "Symptoms: \nNervousness, Worry, Fear, Panic Attacks\n\nDescription: \nA mental health disorder characterized by excessive worrying, nervousness, and fear.\n\nTips: \nTry relaxation techniques, such as deep breathing and meditation, exercise regularly, seek professional help if necessary.",
  },
  {
    title: "Bipolar Disorder",
    content:
      "Symptoms: \nExtreme Mood Swings\n\nDescription: \nA mood disorder characterized by extreme mood swings, including highs (mania or hypomania) and lows (depression).\n\nTips: \nFollow a treatment plan, communicate with family and friends, and practice self-care.",
  },
  {
    title: "Obsessive-Compulsive Disorder (OCD)",
    content:
      "Symptoms: \nIntrusive Thoughts, Repetitive Behaviors\n\nDescription: \nA mental health disorder characterized by uncontrollable, intrusive thoughts and repetitive, ritualized behaviors\n\nTips: \nSeek professional help, practice relaxation techniques, and find healthy ways to cope with stress.",
  },
  {
    title: "Post-Traumatic Stress Disorder (PTSD)",
    content:
      "Symptoms: \nFlashbacks, Avoidance, Hypervigilance\n\nDescription: \nA mental health disorder that can occur after a person has experienced or witnessed a traumatic event.\n\nTips: \nSeek professional help, try stress-reduction techniques such as mindfulness or yoga, communicate with a trusted friend or family member.",
  },
  {
    title: "Generalized Anxiety Disorder (GAD)",
    content:
      "Symptoms: \nExcessive worry, restlessness, irritability\n\nDescription: \nA mental health disorder characterized by persistent and excessive worry about everyday things.\n\nTips: \nSeek professional help, practice relaxation techniques, exercise regularly, and avoid alcohol and caffeine.",
  },
  {
    title: "Panic Disorder",
    content:
      "Symptoms: \nPanic attacks, sweating, trembling\n\nDescription: \nA mental health disorder characterized by sudden and repeated attacks of fear or anxiety.\n\nTips: \nSeek professional help, practice deep breathing exercises, avoid alcohol and caffeine, and get enough sleep.",
  },
  {
    title: "Attention Deficit Hyperactivity Disorder (ADHD)",
    content:
      "Symptoms: \nInattention, hyperactivity, impulsivity\n\nDescription: \nA mental health disorder that can cause above-normal levels of hyperactive and impulsive behaviors.\n\nTips: \nSeek professional help, create structure and routine, break tasks into smaller steps, and practice mindfulness and meditation.",
  },
  {
    title: "Social Anxiety Disorder (SAD)",
    content:
      "Symptoms: \nFear of social situations, nervousness, self-consciousness\n\nDescription: \nA mental health disorder characterized by extreme fear or anxiety in social situations.\n\nTips: \nSeek professional help, practice relaxation techniques, gradually expose yourself to feared situations, and avoid alcohol and caffeine.",
  },
  {
    title: "Eating Disorders",
    content:
      "Symptoms: \nDistorted body image, unhealthy eating habits, obsession with weight and food\n\nDescription: \nA group of mental health disorders that involve unhealthy eating habits and distorted body image.\n\nTips: \nSeek professional help, practice self-care, try to establish a healthy relationship with food and exercise, and seek support from friends and family.",
  },
  {
    title: "Schizophrenia",
    content:
      "Symptoms: \nDelusions, hallucinations, disorganized speech and behavior\n\nDescription: \nA severe mental health disorder that affects a person's ability to think, feel, and behave clearly.\n\nTips: \nSeek professional help, adhere to treatment plans, establish a support system, and practice self-care.",
  },
];

const Insights = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");


  const toggleSection = (index) => {
    setActiveSectionIndex(activeSectionIndex === index ? null : index);
  };

  const filteredSections = sections.filter((section) =>
    section.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={0}
  >
    <View style={[styles.container, { width: Dimensions.get("window").width }]}>
      <ScrollView showsVer={false}>
        <Text style={styles.TitleHeader}>Insights</Text>

        <TextInput
          style={styles.searchBar}
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
          placeholder="Search..."
        />

        {filteredSections.map((section, index) => (
          <View key={index} style={styles.section}>
            <TouchableOpacity onPress={() => toggleSection(index)}>
              <Text style={styles.title}>{section.title}</Text>
            </TouchableOpacity>
            <Collapsible collapsed={activeSectionIndex !== index}>
              <Text style={styles.content}>{section.content}</Text>
            </Collapsible>
          </View>
        ))}
        <View>
          <Text
            onPress={() => navigation.navigate("Insights")}
            style={{
              fontSize: 26,
              fontWeight: "bold",
              backgroundColor: "#f0eef9",
            }}
          ></Text>
        </View>
      </ScrollView>
    </View></KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0eef9",
    paddingLeft: 35,
    paddingRight: 35,
    // marginVertical: 8,
    alignSelf: "center",
    // marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 300,
    fontFamily: 'Gilroy-Medium',
    marginBottom: 15,
    borderWidth: 1,
    borderRadius: 25,
    padding: 15,
    borderColor: "#00876f",
    color: "#00876f",
    fontWeight: '500',
    // backgroundColor: "#00876f", 
    overflow: "hidden",
    textAlign: 'left'
 
  },

  content: {
    fontSize: 17,
    marginTop: 1,
    marginBottom: 20,
    padding: 3,
    fontFamily: 'Gilroy-Regular',
    lineHeight: 20,
    
  },
  TitleHeader: {
    fontFamily: 'Gilroy-Medium',
    color: "#6658c5",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 63,
    fontSize: 19,
  },
  searchBar: {
    fontFamily: 'Gilroy-Medium',
    backgroundColor: null,
    height: 55,
    borderWidth: 2,
    borderColor: "#6658c5",
    borderRadius: 30,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 16,
        fontSize: 17,
    opacity: 0.7,
  },
});

export default Insights;
