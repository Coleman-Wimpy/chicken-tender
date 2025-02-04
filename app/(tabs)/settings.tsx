import { Button, StyleSheet, Text } from 'react-native'
import React from 'react'
import { signOut } from '@/util/LogoutUtil'
import { SafeAreaView } from 'react-native-safe-area-context'

const settings = () => {
  return (
    <SafeAreaView>
      <Text>settings</Text>
      <Button title={'Sign Out'} onPress={signOut}></Button>
    </SafeAreaView>
  )
}

export default settings

const styles = StyleSheet.create({})