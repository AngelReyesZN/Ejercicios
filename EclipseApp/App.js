import React, { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated,  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  const moonAnimation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(moonAnimation, {
        toValue: 1,
        duration: 7000,
        useNativeDriver: false
      })
    ).start();
  }, [moonAnimation]);

  const moonLeft = moonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['-40%', '100%']
  });

  return (

    <LinearGradient
    colors={['#3780e6', '#488fdd', '#73a5d8','#aecef4','#d5e5f5']}
    style={{ flex: 1}}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Eclipse 2024 🌒</Text>
        <View style={styles.sun} />
        <Animated.View style={[styles.moon, { left: moonLeft }]} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  sun: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
    borderRadius: 50,
    position: 'absolute',
    top: '20%',
    left: '20%'
  },
  moon: {
    width: 100,
    height: 100,
    backgroundColor: '#404040',
    borderRadius: 50,
    position: 'absolute',
    top: '20%'
  }
});
