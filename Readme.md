## Name: Luciano Gimenez
## StudentID: 23643

---

The objective of this project is to develop a mobile app to showcase in map places of literary importance in Ireland and surrounding areas, related to poets, patrons, publishers in Ireland who lived in the 16th and 17th century. The requirements are as follows and all requirements carry equal weightage:

---

-Display markers on the map
- [x] Load places and place types JSON data1
- [x] Display marker for all places using GPS coordinates
- [x] Use different colours, one for each place type
- [ ] When marker is tapped, place name should be displayed on a pop-up info window
-Show extended information
- [x] When the pop up info window is tapped, show in full screen all details of the place (id, name, - [x]- [x] Gaelic name, type, GPS coordinates)
- [x] Show the image of the place loaded from the internet2
- [ ] [Bonus] Show relevant image using any free web service, or search engine
- [x] Show a back button, when pressed, go back to map view
-Allow filtering by Place Type
- [x] Show dropdown for selecting Place Type, default value should be all
- [x] When a specific Place Type is selected, show only the places with this Place Type on the map
-Allow custom marker
- [x] Long Press anywhere on map to show a draggable marker
- [ ] Show distance3 to the nearest place (from the downloaded data), and on drag marker, update this info
- [ ] Draw a semi-transparent blue circle around this marker with a radius of 10 km and show number of places within this radius
- [ ] [Bonus] Create a slider to control the above radius in km (1-1000, default 10) and on change, update the circle on the map and update number of places within the radius info shown accordingly

---

Release [link](https://github.com/23643studentdorset/CA2-FinalProject-MobileApps/releases/tag/v1.0.1)

video [link](https://youtu.be/HBegvqc12do)

---

For this project we were asked to create an app and display markers on places from a Json file, also info of the type of place from other call. Once we have that info, we had to create markers with different colours, based on the place type, and open a description of that place when clicking on the marker. After that we had to filter the markers to display based on the place_type. We wanted to explore React as framework, for that reason we develop it on react native, using expo, because or the simplicity when testing and developing.
Finally, generate a marker, as new marker in our case, and calculate distance to places and to display a list of the closest place, and near places. We did not create a draggable marker because every time expo would crash when we were using it, so we decided to create a normal marker. We did not calculate the distance to the nearest place nor the later requirements on the checklist.
We encounter mainly one problem that we approached in different ways, about loading the image, we were using the command not to keep-cache and that approach did not work and, we tried when sending the request to send a header no-cache, but neither of those approaches worked and the image was not changing. We solved it by adding a number to the URL of the website based on date.time.
With this app we took the approach of having only one screen and when the user clicks on any marker, we are setting a modal page to visible with the detailed info about the place, by pressing the go back to map button the user is setting the visible to false the modal, so the whole app works on one screen. Also, to create the filters we used the picker library from react-native that lets you manage the place_types and filters in a simple way.
