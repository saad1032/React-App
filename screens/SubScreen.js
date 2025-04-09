import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

export default function SubScreen({navigation}) {
  //id const DATA = require("../ayah.json");
  const [data, setData] = useState([]);
  const scrollY = new Animated.Value(0);

  const Item = ({ item }) => (
    <TouchableOpacity 
      style={styles.item}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('SurahDetail', { surahNumber: item.number })}
    >
      <View style={styles.itemContent}>
        <View style={styles.innerTop}>
          <View style={styles.english}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
          <View style={styles.arabic}>
            <Text style={styles.arabicText}>
              {item.AyahNumber} {item.englishName}
            </Text>
          </View>
        </View>
        <View style={styles.innerBottom}>
          <Text style={styles.textpara}>Parah {item.number}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const getQuranFromApiAsync = async () => {
    try {
      const response = await fetch(
        "https://api.alquran.cloud/v1/quran/en.asad"
      );
      const json = await response.json();
      setData(json.data.surahs);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getQuranFromApiAsync();
  }, []);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [120, 70],
    extrapolate: 'clamp',
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={[styles.header, { height: headerHeight }]}>
        <View style={styles.headerContent}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Quran Surahs</Text>
        </View>
      </Animated.View>
      
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.number.toString()}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: '#3b5998',
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 8,
    marginRight: 8,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    flex: 1,
    textAlign: 'center',
  },
  listContent: {
    paddingTop: 130,
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  item: {
    marginVertical: 8,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  itemContent: {
    backgroundColor: '#3b5998',
    borderRadius: 15,
  },
  innerTop: {
    flexDirection: "row",
    padding: 16,
  },
  innerBottom: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 12,
    alignItems: "center",
  },
  english: {
    flex: 1,
    alignItems: "center",
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    marginRight: 8,
  },
  arabic: {
    flex: 1,
    alignItems: "center",
    padding: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  arabicText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  textpara: {
    color: "white",
    fontWeight: "500",
    fontSize: 14,
    textAlign: "center",
  },
});