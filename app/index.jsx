import { Text, View, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { images } from '../constants'

//prevents items form overlapping in different screens and phones
const index = () => {
  return (
  
    <GestureHandlerRootView>
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView
      contentContainerStyle={{height: '100%'}}
      >
        <View
        className='w-full justify-center items-center h-full px-4'
        >
          <Image 
          source={images.logo}
          className='w-[130px] h-[84px]'
          resizeMode='contain'
          />
          <Image
          source={images.cards}
          className="max-w--[380px] w-full h-[300px]"
          resizeMode='contain'
          />
          <View
          className="relative mt-5"
          >
            <Text
            className="text-3xl text-white font-bold text-center"
            >
              Discover Endless Possibilities with 
                <Text className="text-secondary-200"> Aora</Text>
            </Text>
            <Image 
              source={images.path}
              className="w-[100px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode='contain'
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100">
            Where creativity meets innovation:
            embark on a journey of limitless exploration
            with Aora
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
    
  )
}

export default index

