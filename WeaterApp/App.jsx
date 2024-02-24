import React, {useState} from 'react';
import {SafeAreaView, Text, Image, FlatList, StyleSheet, View} from 'react-native';

const App = () => {

  const moviesList = [
    {
      id: 1,
      name: 'Transformers: La Venganza de los Caídos',
      director: 'Michael Bay',
      url: 'https://es.web.img2.acsta.net/medias/nmedia/18/68/50/66/19123430.jpg',
    },
    {
      id: 2,
      name: 'Cars',
      director: 'Disney',
      url: 'https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 3,
      name: 'Avengers',
      director: 'Marvel',
      url: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    },
    {
      id: 4,
      name: 'El Laberinto del Fauno',
      director: 'Guillermo del Toro',
      url: 'https://pics.filmaffinity.com/El_laberinto_del_fauno-222302534-large.jpg',
    },
    {
      id: 5,
      name: 'Furia de titanes',
      director: 'Louis Leterrier',
      url: 'https://images.justwatch.com/poster/162204077/s718/furia-de-titanes.jpg',
    },{
      id: 6,
      name: 'Titanes del Pacífico',
      director: 'Guillermo del Toro',
      url: 'https://hacerselacritica.com/wp-content/uploads/2013/07/pacific_rim_poster11.jpg',
    },{
      id: 7,
      name: '007: Spectre',
      director: 'Sam Mendes',
      url: 'https://www.aceprensa.com/wp-content/uploads/2015/11/206647-0.jpg',
    },{
      id: 8,
      name: 'The Batman',
      director: 'Matt Reeves',
      url: 'https://moviepostermexico.com/cdn/shop/products/batman_ver3_xxlg_1024x1024@2x.jpg?v=1634749050',
    },{
      id: 9,
      name: 'Dunkerque',
      director: 'Christopher Nolan',
      url: 'https://moviepostermexico.com/cdn/shop/products/DUNKIRK4_1024x1024@2x.jpg?v=1608618243',
    },{
      id: 10,
      name: 'El club de la pelea',
      director: 'David Fincher',
      url: 'https://es.web.img2.acsta.net/medias/nmedia/18/69/04/88/20140966.jpg',
    },
  ];

  const [movies, setMovies] = useState(moviesList);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Cinepolito <Image style={styles.logo} source={require('./img/ticket.png')} />
      </Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatListContainer}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieItem}>
            <Image
              style={styles.image}
              source={{
                uri: item.url,
              }}
            />
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textDirector}>{item.director}</Text>
          </View>
        )}
      />

    <View style={styles.icons}>
    <Image style={styles.ic} source={require('./img/casa.png')} />
    <Image style={styles.ic} source={require('./img/lupa.png')} />
    <Image style={styles.ic} source={require('./img/descargar.png')} />
    </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1c29',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
    color: 'white',
    marginBottom: '50%'
  },
  image: {
    width: 200,
    height: 300,
    alignSelf: 'center', 
    marginTop: 15, 
    marginBottom: 15,
    borderRadius: 10,
  },
  textDirector:{
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  textName:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  flatListContainer: {
    marginTop: 16,
  },
  movieItem: {
    marginRight: 50, // Ajusta el espacio entre elementos
  },
  logo: {
    height: 30,
    width: 30,
  },
  coverPR: {
    height: 200,
    width: 300,
  },
  icons:{
    flexDirection: 'row',
  },
  ic: {
    height: 30,
    width: 30,
    marginRight: 40, 
    marginLeft: 40, 
    marginBottom: 20
  },
});

export default App;