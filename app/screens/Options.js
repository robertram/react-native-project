
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
    aligItems: 'center'
  }, 
  buttonTitle: {
    color: '#fff'
  }
}

const Options = () => {
  const webViewRef =useRef();
  const handleBackPress=()=>{
    webViewRef.current.goBack();
  }
  return (
    <>
      <View style={styles.container}>
          <TouchableOpacity onPress={handleBackPress} >
            <Text style={styles.buttonTitle}>Back</Text>
          </TouchableOpacity>
      </View>
      <WebView
        source={{ uri: 'https://invest.omni.cr' }}
        style={{ marginTop: 0 }}
        ref={webViewRef}
        onNavigationStateChange={(state)=>{
          const back = state.canGoBack;
        }}
      />
    </>
  );
};

export default Options;
