import {Icon} from 'leaflet'
import markerimg from 'leaflet/dist/images/marker-icon.png';

export const constomIcons={
    marker:new Icon({
        iconUrl:'https://img.icons8.com/?size=512&id=52671&format=png',
        iconSize : [32,36], // size of the icon
        iconAnchor : [1, 1], // point of the icon which will correspond to marker's location
        popupAnchor : [-1, -1] // point from which the popup should open relative to the iconAnchor
    }),
    collegeIcon:new Icon ({
        iconUrl : 'https://img.icons8.com/?size=512&id=TJNhZL4ePBJ5&format=png',
        iconSize : [32,36], // size of the icon
        //iconAnchor : [1,1], // point of the icon which will correspond to marker's location
        popupAnchor : [-1, -1] // point from which the popup should open relative to the iconAnchor
      
      }),
      foodIcon:new Icon ({
        iconUrl : 'https://img.icons8.com/doodle/48/apple.png',
        iconSize : [35, 35], // size of the icon
        iconAnchor : [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor : [-3, -76] // point from which the popup should open relative to the iconAnchor
      }),
      healthIcon:new Icon ({
        iconUrl: 'https://img.icons8.com/doodle/48/heart-with-pulse.png',
        iconSize : [35,35], // size of the icon
        iconAnchor : [22,94], // point of the icon which will correspond to marker's location
        popupAnchor : [-3, -76] // point from which the popup should open relative to the iconAnchor
      }),
      
    housingIcon : new Icon({
        iconUrl: 'https://img.icons8.com/plasticine/100/exterior.png',
        iconSize: [35, 35], // size of the icon
        iconAnchor: [1, 1], // point of the icon which will correspond to marker's location
        popupAnchor: [-1, -2] // point from which the popup should open relative to the iconAnchor
      })
      
}