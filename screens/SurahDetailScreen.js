import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function SurahDetailScreen({ route, navigation }) {
  const [surah, setSurah] = useState(null);
  const [arabicSurah, setArabicSurah] = useState(null);
  const [urduSurah, setUrduSurah] = useState(null);
  const [loading, setLoading] = useState(true);
  const { surahNumber } = route.params;

  useEffect(() => {
    fetchSurahDetails();
  }, []);

  const fetchSurahDetails = async () => {
    try {
      const [englishResponse, arabicResponse, urduResponse] = await Promise.all([
        fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/en.asad`),
        fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`),
        fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ur.jalandhry`)
      ]);
      
      const [englishJson, arabicJson, urduJson] = await Promise.all([
        englishResponse.json(),
        arabicResponse.json(),
        urduResponse.json()
      ]);
      
      setSurah(englishJson.data);
      setArabicSurah(arabicJson.data);
      setUrduSurah(urduJson.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#3b5998" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{surah?.name}</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.surahInfo}>
          <Text style={styles.surahName}>{surah?.englishName}</Text>
          <Text style={styles.surahType}>{surah?.revelationType} • {surah?.numberOfAyahs} Verses</Text>
        </View>

        <View style={styles.versesContainer}>
          {surah?.ayahs.map((ayah, index) => (
            <View key={ayah.number} style={styles.verseContainer}>
              <View style={styles.verseNumber}>
                <Text style={styles.verseNumberText}>{ayah.number}</Text>
              </View>
              <View style={styles.verseContent}>
                <Text style={styles.arabicText}>
                  {arabicSurah?.ayahs[index]?.text}
                </Text>
                <Text style={styles.urduText}>
                  {urduSurah?.ayahs[index]?.text}
                </Text>
                <Text style={styles.verseText}>{ayah.text}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#3b5998',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  backButton: {
    padding: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
    textAlign: 'center',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  surahInfo: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  surahName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3b5998',
    marginBottom: 8,
  },
  surahType: {
    fontSize: 16,
    color: '#666',
  },
  versesContainer: {
    padding: 16,
  },
  verseContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  verseNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#3b5998',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  verseNumberText: {
    color: 'white',
    fontWeight: 'bold',
  },
  verseContent: {
    flex: 1,
  },
  arabicText: {
    fontSize: 26,
    lineHeight: 45,
    color: '#333',
    textAlign: 'right',
    marginBottom: 12,
    fontFamily: 'System',
  },
  urduText: {
    fontSize: 18,
    lineHeight: 30,
    color: '#444',
    textAlign: 'right',
    marginBottom: 12,
    fontFamily: 'System',
  },
  verseText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
}); 