import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View
    style={styles.container}>
      <Text>Aora</Text>
      <StatusBar style='auto'/>
      <Link href="/profile" style={{color:'blue'}}>Go to profile</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})