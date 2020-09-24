import { StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      style={{ width: 250, height: 250, alignItems:'center', justifyContent:'flex-start', marginTop: 5}}
      source={require('/Users/Waqar/Downloads/pic.png')}
      />
      <Text style={{fontSize: 18, alignItems:'center'}}>Invite people to our platform</Text>
      <Text style={{fontSize: 18, alignItems:'center', marginBottom: 20}}>and earn money</Text>
      <Button 
      title='GENERATE AFFILIATE LINK'
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'black',
    width: '100%',
    height: '100%'
    
   // paddingVertical: 10
  },
});

//if it doesnot fits on your screen, adjust its width and height... it is laptop screen preview.