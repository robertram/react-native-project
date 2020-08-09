import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ImageDetails from '../screens/Images/ImageDetails';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    }
  },
  ImageDetails: {
    screen: ImageDetails,
    navigationOptions: {
      title: 'Image Details',
    }
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 }
  }
});

export default createAppContainer(HomeStack);