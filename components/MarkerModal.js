import React from 'react';
import { View, Modal, Text, Button, StyleSheet } from 'react-native';

function MarkerModal(props) {
  return (    
      <Modal        
        animationType="slide"
        transparent={false}
        visible={props.visible}
        onRequestClose={props.onClose}
        >
        <View style={{marginTop: 22,}}>
          <View>
            <Text style={styles.title}>{props.marker.title}</Text>
            <Text style={styles.text}>Id: {props.marker.id}</Text>
            <Text style={styles.text}>Gaelic Name: {props.marker.gaelicName}</Text> 
            <Text style={styles.text}>Type: {props.marker.type}</Text>
            <Text style={styles.text}>Latitude: {props.marker.latitude}</Text> 
            <Text style={styles.text}>Longitude: {props.marker.longitude}</Text>  
            <Button onPress={props.onClose} title="Go Back to map" />
          </View>
        </View>
      </Modal>
    
  );
}

export default MarkerModal;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 10, 
  },
  text: {
    fontSize: 14,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: 'left', 
  },
});
