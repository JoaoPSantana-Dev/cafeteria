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


      {/* Prato do Dia */}
        <View style={styles.card_pratoDia}>
          <Image style={styles.image} source={require('./assets/coffee.jpg')}></Image>
          <Text style={styles.cardTitle}>Cappucino Especial</Text>
          <Text style={styles.cardSubtitle}>Cremoso e delicioso</Text>
          <Text style={styles.cardPreco}>R$ 12,90</Text>
        </View>
      {/* Prato do Dia */}


      {/* Padaria */}
      <View style={styles.padaria}>

        <View>
          <Text style={styles.padariaTitle}>Padaria</Text>
        </View>

        {/*Primeiro Card*/}
        <View style={styles.cardPadaria}>

          <View style={styles.cardPadariaTexto}>
            <Text style={styles.cardTitle}>Pão </Text>
            <Text style={styles.cardSubtitle}>Pão frânces artesanal feito por nós.</Text>
            <Text style={styles.cardPreco}>R$ 15,00/Kg</Text>
          </View>

          <Image style={styles.cardPadariaImagem} source={require("./assets/paes.jpg")}></Image>
        </View>
        {/*Primeiro Card*/}

        {/*Segundo Card*/}
         <View style={styles.cardPadaria}>

          <View style={styles.cardPadariaTexto}>
            <Text style={styles.cardTitle}>Baguete</Text>
            <Text style={styles.cardSubtitle}>Baguete artesanal perfeita com cappucino.</Text>
            <Text style={styles.cardPreco}>R$ 25,99 </Text>
          </View>

          <Image style={styles.cardPadariaImagem} source={require("./assets/baguetes.jpeg")}></Image>
        </View>
        {/*Segundo Card*/}

        {/*Terceiro Card*/}
         <View style={styles.cardPadaria}>

          <View style={styles.cardPadariaTexto}>
            <Text style={styles.cardTitle}>Sonho Moça</Text>
            <Text style={styles.cardSubtitle}>Sonho artesanal feito com leite moça</Text>
            <Text style={styles.cardPreco}>R$ 8,99 </Text>
          </View>

          <Image style={styles.cardPadariaImagem} source={require("./assets/sonho.jpg")}></Image>
        </View>
        {/*Terceiro Card*/}

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

  card_pratoDia:{
    padding:8,
    backgroundColor: "#cf6f51",
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 5,
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
    fontWeight: "800",
    color: "#141313",
    marginTop: 5
  },

  image:{
    width: "100%",
    height: 180
  },

  padaria:{
    marginTop: 24,
    marginBottom:10  
  },

  padariaTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2f2d2c",
    marginBottom: 10
  },

  cardPadaria: {
    padding:8,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginBottom:10,
    flexDirection: "row",

    borderColor: "#000",
    borderWidth: 1,
    
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 5,
  },

  cardPadariaTexto: {
    maxWidth: "60%"
  },

  cardPadariaImagem: {
    width: "40%",
    height: "100%"
  }


})
