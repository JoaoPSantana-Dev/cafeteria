import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native/types_generated/index';

export default function App() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text>Café do Código</Text>
        <Text>Seu café, uma linha por vez</Text>
      </View>

      <View>
        <Ionicons name="person" size={20} color="#923709ff"></Ionicons>
      </View>


    </View>

  );
}

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#c443ebff'
  },

  header: {
    width:'100%',
    paddingHorizontal: 24,
    paddingTop: 100,
    paddingBottom: 20,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  }
})
