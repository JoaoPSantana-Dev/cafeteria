import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, ScrollView, Text, Image } from 'react-native';

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


        <View style={styles.card}>
          <Image style={styles.image} source={require('./assets/coffee.jpg')}></Image>
          <Text style={styles.cardTitle}>Cappucino Especial</Text>
          <Text style={styles.cardSubtitle}>Cremoso e delicioso</Text>
          <Text style={styles.cardPreco}>R$ 12,90</Text>

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

  card:{
    padding:8,
    backgroundColor: "#f77070",
    borderRadius: 10
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2f2d2c"
  },

  cardSubtitle: {
    fontSize: 16,
    color: "#141313",
    marginTop: 5
  },

  cardPreco: {
     fontSize: 16,
    color: "#141313",
    marginTop: 5
  },

  image:{
    width: "100%",
    height: 180
  }


})
