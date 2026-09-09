import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Café do Código</Text>
          <Text style={styles.headerSubtitle}>Seu café, uma linha por vez</Text>
        </View>

        <View style={styles.avatarPlaceHolder} >
          <Ionicons name="person" size={20} color="rgb(20, 14, 11)"></Ionicons>
        </View>
      </View>
      {/* Header */}


      {/* Conteudo */}
      <View style={styles.content}>
        
        <View style={styles.greetingSection}>
          <Text style={styles.greetingTitle}>Bom dia!</Text>
          <Text style={styles.greetingSubtitle}>Que tal um café hoje?</Text>
        </View>


      </View>



      {/* Conteudo */}

    </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },

  header: {
    width: '100%',
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#eee9e9"
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "800",
    color: "#2f2d2c"
  },

  headerSubtitle: {
    fontSize: 14,
    color: "#9b9b9b",
    marginTop: 4,
  },

  avatarPlaceHolder: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center"
  },

  content:{
    paddingHorizontal: 24,
  },

  greetingSection:{
    marginTop:10,
    marginBottom:24
  },

  greetingTitle: {
    fontSize: 32,
    fontWeight: "800",
    color: "#2f2d2c"
  },

  greetingSubtitle: {
    fontSize: 16,
    color: "#9b9b9b",
    marginTop: 8
  },


})
