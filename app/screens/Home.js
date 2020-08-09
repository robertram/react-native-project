import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Button, FlatList, Image } from 'react-native';
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { connect, useDispatch } from 'react-redux';
import { addNumber, axiosSearch } from '../actions';
import colors from '../constants/colors';
import Header from '../components/Header';

class Home extends React.Component {
  componentDidMount() {
    this.props.axiosSearch();
  }
  render() {
    return (
      <SafeAreaView style={[styles.container]}>
        <Header></Header>
        <FlatList
          data={this.props.images}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={styles.box} key={item.id}>
              <Text style={styles.title}>{item.alt_description}</Text>
              <Image
                resizeMode='contain'
                style={styles.image}
                source={{
                  uri: item.urls.thumb,
                }}
              />
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
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
    height: 300,
    width: 300,
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

const mapStateToProps = (state) => {
  return {
    numbers: state.imagesReducer.numbers,
    images: state.imagesReducer.images
  }
}

//const mapStateToProps = ({ images }) => ({ images });
const mapDispatchToProps = (dispatch) => ({
  addNumber: () => dispatch({ type: 'ADD_NUMBER' }),
  axiosSearch: () => dispatch(axiosSearch()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);