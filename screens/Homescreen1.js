
import React from "react";
import { View, Text, StyleSheet, Image, Pressable, Touchable, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Homescreen1({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.Header}>
            <Text style={styles.title}>Quran</Text>
            <Image source={require("../assets/quran.jpg")} style={styles.quranIcon}></Image>
            <Text style={styles.lastRead}>last read</Text>
             <Text style={styles.surah}>Al-Faatiha</Text>
                    <Text style={styles.verse}>Verse No. 7</Text>
                    <Text style={styles.date}>Thu Feb 27 2025 09:31 AM</Text>
        </View>

       <View style={styles.features}>
            <Text style={styles.Ftext}>Features</Text>
            <View style={styles.grid}>
              <TouchableOpacity onPress={()=> navigation.navigate("SubScreen")}>
              <View style={styles.card}>
                <Ionicons name="book-outline" size={40} color="black" />
                <Text style={styles.cardText}>Read Quran</Text>
              </View>
              </TouchableOpacity>
              <View style={styles.card}>
                <Ionicons name="search-outline" size={40} color="black" />
                <Text style={styles.cardText}>Search</Text>
              </View>
              <View style={styles.card}>
                <Ionicons name="settings-outline" size={40} color="black" />
                <Text style={styles.cardText}>Setting</Text>
              </View>

            </View>

       </View>

    
    </View>
  );
}
const styles = StyleSheet.create({
 container: {flex: 1,backgroundColor:"#3b5998"},

 Header: {
           backgroundColor:"#3b5998",
           alignItems:"center",
           padding: 20
 },
 title: { fontSize: 30,
     fontWeight: "bold",
      color: "white"
 },

 quranIcon: { width: 80, height: 60, marginVertical: 10 },    
 lastRead: { fontSize: 16, color: "white",marginTop:30 }, 
 surah: { fontSize: 22, fontWeight: "bold", color: "white" },
 verse: { fontSize: 16, color: "white" },
 date: { fontSize: 14, color: "white", marginTop: 5 },


 features: {flex: 1,backgroundColor:"white",
  borderTopLeftRadius:20,borderTopRightRadius:20,
  alignItems:"center", padding:20},

 Ftext: {fontWeight:"bold",fontSize:20, marginBottom: 20},

 grid: {flexDirection: "row",flexWrap:"wrap", justifyContent: "center"},

 card: { width: 120,backgroundColor: "#f0f8ff",
   borderRadius: 10, height: 120, alignItems:"center",
   justifyContent:"center", shadowColor: "#000",
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.2,shadowRadius: 2, marginTop:20,margin: 10},

   cardText: { fontSize: 16, marginTop: 10, alignContent:"center" },   


});




