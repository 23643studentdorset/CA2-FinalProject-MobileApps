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
            <Button onPress={props.onClose} title="Go Back to map" />
          </View>
        </View>
      </Modal>
    
  );
}

export default MarkerModal;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', 
  }});
