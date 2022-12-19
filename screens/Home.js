import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const Home = () => {
    const [places, setPlaces] = useState([])
    const [placesTypes, setPlacesTypes] = useState([])

    useState(() => { 
        const getPlaces = async () => {
          try {
            const response = await fetch('https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/places.json');
            const placesData = await response.json();
            console.log(placesData);
            setPlaces(placesData)    
          } 
          catch (error) {
            console.error(error);
          }
              
        }
        const getPlacesTypes = async () => {
          try {
            const response = await fetch('https://gist.githubusercontent.com/saravanabalagi/541a511eb71c366e0bf3eecbee2dab0a/raw/bb1529d2e5b71fd06760cb030d6e15d6d56c34b3/place_types.json');
            const placesTypesData = await response.json();
            console.log(placesTypesData);
            setPlacesTypes(placesTypesData) 
          } 
          catch (error) {
            console.error(error);
          }
          
        }
        getPlaces()
        getPlacesTypes()
      }, []);

      function GetAColor (id){
        switch (id) {
          case 1:
            return "navy";
          case 2:
            return "purple";
          case 3:
            return "green";
          case 4:
            return "yellow";
          case 5:
            return "linen";
          case 6:
            return "aqua";
          case 7:
            return "teal";
          case 8:
            return "violet";
          case 9:
            return "gold";
          case 10:
            return "indigo";
          case 11:
            return "orange";
          case 12:
            return "turquoise";
          case 13:
            return "plum";
          case 14:
            return "tomato";
          default:
            return "wheat";
        }   
      }
      
      return (
        <View style={styles.container}>
        {/*Render our MapView*/}
            <MapView
                style={styles.map}
                //specify our coordinates.
                initialRegion={{
                latitude: 53.4494762,
                longitude: -7.8529786,
                latitudeDelta:5.3,
                longitudeDelta: 5.3,
                }}>
                {places.map((place) => (
                    <Marker
                        key={place.id}
                        coordinate={{latitude: place.latitude, longitude: place.longitude}}
                        title={place.name}
                        pinColor={GetAColor(place.place_type_id)}
                       />
                ))}    
            </MapView> 
        </View>
      );
}

export default Home

const styles = StyleSheet.create({
    container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
    },
    map: {
    ...StyleSheet.absoluteFillObject,
    },
});