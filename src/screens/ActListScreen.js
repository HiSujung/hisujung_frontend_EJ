import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const API_URL = 'http://3.39.104.119/externalact/';

export default function ActListScreen() {
    const [activity, setActivity] = useState([]);
    const navigation = useNavigation(); // Initialize navigation

    useEffect(() => {
        fetchActivityData();
      }, []);
    
      const fetchActivityData = async () => {
        try {
          const response = await axios.get(API_URL);
          if (response.status === 200) {
            setActivity(response.data); // Set the fetched activity data in the state
          }
        } catch (error) {
          console.error('Error fetching activity data:', error);
        }
      };
    
      const handleActivityPress = () => {
        navigation.navigate('Activity');
      };

      const handleActListPress = () => {
        navigation.navigate('ActList'); 
      };
  
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#E2D0F8', '#A0BFE0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearGradient}
      >
        <View style={styles.header}>
          <TouchableOpacity style={styles.homeButton}>
            <AntDesign name="home" size={24} color="rgba(74, 85, 162, 1)" />
          </TouchableOpacity>
          <TouchableOpacity  onPress={handleActListPress}>
            <Text style={styles.headerTitle}>게시물 목록</Text>
            </TouchableOpacity>
        </View>
      </LinearGradient>
      <View style={styles.nav}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.navContent}>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>전체</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>기획</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>아이디어</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>브랜드/네이밍</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>광고/마케팅</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>사진</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton}>
            <Text style={styles.navButtonText}>개발/프로그래밍</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <View style={styles.main}>
  {/* <ScrollView contentContainerStyle={styles.activityList}> */}
    <FlatList
      data={activity}
      keyExtractor={(item) => item.id.toString()} // Assuming 'id' is a unique identifier
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.activityItem}
          onPress={() => navigation.navigate('Activity', { activityId: item.id })} // Pass the activityId to the 'Activity' screen
        >
          <View style={styles.activityDetails}>
            <Text style={styles.activityCategory}>대외활동</Text>
            {/* <Text style={styles.activityDday}>D-10</Text> */}
          </View>
          <Text style={styles.activityItemTitle}>{item.title}</Text>
        </TouchableOpacity>
      )}
    />
        {/* </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  homeButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  headerTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  nav: {
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    overflow: 'hidden',
  },
  navContent: {
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  navButton: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  navButtonText: {
    color: 'rgba(74, 85, 162, 1)',
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: 'white',
  },
  activityList: {
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  activityItem: {
    backgroundColor: 'rgba(226, 208, 248, 0.3)',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  activityDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  activityCategory: {
    fontWeight: 'bold',
    color: 'rgba(74, 85, 162, 1)',
  },
  activityDday: {
    fontWeight: 'bold',
  },
  activityItemTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});