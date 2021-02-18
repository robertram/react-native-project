
import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { WebView } from 'react-native-webview';

const styles={
  container: {
    height: 40, 
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    aligItems: 'center',
  }, 
  buttonTitle: {
    color: '#fff'
  }
}

const Options = ({navigation}) => {
  const webViewRef =useRef();
  const handleBackPress=()=>{
    webViewRef.current.goBack();
  }
  const handleCloseWebview=()=>{
    navigation.navigate('HomeScreen');
  }
  const onMessage = () => {
    handleCloseWebview();
  }

  const INJECTED_JAVASCRIPT = `(function() {
    //document.getElementById('Home').innerHTML = 'Holaaaa';
})();`;

  return (
    <>
      <View style={styles.container}>
          <TouchableOpacity onPress={handleCloseWebview} >
            <Text style={styles.buttonTitle}>Close Webview</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleBackPress} >
            <Text style={styles.buttonTitle}>Back</Text>
          </TouchableOpacity>
      </View>
      <WebView
        source={{ uri: 'http://192.168.0.4:3000/' }}
        style={{ marginTop: 0 }}
        ref={webViewRef}
        onNavigationStateChange={(state)=>{
          const back = state.canGoBack;
        }}
        onMessage={onMessage}
        injectedJavaScript={INJECTED_JAVASCRIPT}
      />
    </>
  );
};

export default Options;
