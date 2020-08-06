import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Image, ActivityIndicator, View, FlatList, SafeAreaView, Button } from 'react-native';
import colors from '../config/colors';
import Header from '../components/Header';
import { connect, useDispatch } from 'react-redux';
import { searchImagesBy, deleteImages, axiosSearch, addNumber } from './../actions';

function ImageList(props) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //const dispatch = useDispatch();

  /*useEffect((term) => {
    dispatch(searchImagesBy(term))
  });*/

  //https://api.unsplash.com/search/photos?query=office&client_id=sk6CBTMciDoHkiXCD-GKdV5D4LrtLzCdy1yIGCLBWsA
  useEffect(() => {
    setData(images);
  }, []);

  const { fetching, images, searchImagesBy, deleteImages, axiosSearch, addNumber } = props;

  return (
    <SafeAreaView style={styles.container}>
      <Header></Header>
      {console.log('fetching ', props)}
      <Text style={styles.title}>{fetching}</Text>
      <Button title="load images" onPress={() => { axiosSearch() }}></Button>

      <Button title="get another" onPress={() => { deleteImages() }}></Button>
      
      <Button title="add number" onPress={() => { addNumber() }}></Button>

      {console.log('fetching 2', props)}

      {/*fetching ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.box}>
              {console.log('item ', item)}
              <Text style={styles.title}>{item.alt_description}</Text>
              {/*<Image
                resizeMode='contain'
                style={styles.image}
                source={{
                  uri: item.urls.raw,
                }}
              />}

            </View>
          )}
        />
            )*/}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.black,
    fontSize: 20,
  },
  text: {
    color: colors.black,
  },
  image: {
    height: 150,
    width: 150,
  },
  box: {
    width: '100%',
    flex: 1,
    paddingVertical: 20,
    marginVertical: 50,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
    borderColor: colors.gray,
  }
});

/*const mapStateToProps = (state) => {
  console.log('map state', state.images);
  return { imagesState: state.images }
};*/

const mapStateToProps = (state) => {
  console.log('mapState ', state);
  return {
    images: state.imagesReducer.images,
    fetching: state.imagesReducer.fetching,
    error: state.imagesReducer.error,
    numbers: state.imagesReducer.numbers
  }
};

//const mapStateToProps = ({ images }) => ({ images });
const mapDispatchToProps = (dispatch) => ({ 
  searchImagesBy: () => dispatch(searchImagesBy()),
  deleteImages: () => dispatch(deleteImages()),
  addNumber: () => dispatch(addNumber()),
  //axiosSearch: () => dispatch(axiosSearch()) 
})

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);


