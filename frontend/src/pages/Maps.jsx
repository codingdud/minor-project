import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet'
import { useDispatch,useSelector } from 'react-redux';
import { mylocAction } from '../../store/myloc';
import { pgsAction } from '../../store/pgs';
const myHeaders = new Headers();

import classes from './maps.module.css'
import { useEffect } from 'react';
import Form from '../components/form';


const collegeIcon = new Icon ({
  iconUrl : 'https://cdn3.iconfinder.com/data/icons/placeholder-3/64/education-college-school-placeholder-pin-pointer-gps-map-location-1024.png',
  iconSize : [35,35], // size of the icon
  //iconAnchor : [1,1], // point of the icon which will correspond to marker's location
  popupAnchor : [-1, -1] // point from which the popup should open relative to the iconAnchor

})
const foodIcon = new Icon ({
  iconUrl : 'https://img.icons8.com/doodle/48/apple.png',
  iconSize : [35, 35], // size of the icon
  iconAnchor : [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor : [-3, -76] // point from which the popup should open relative to the iconAnchor
})
const healthIcon = new Icon ({
  iconUrl: 'https://img.icons8.com/doodle/48/heart-with-pulse.png',
  iconSize : [35,35], // size of the icon
  iconAnchor : [22,94], // point of the icon which will correspond to marker's location
  popupAnchor : [-3, -76] // point from which the popup should open relative to the iconAnchor
})

const housingIcon = new Icon({
  iconUrl: 'https://img.icons8.com/plasticine/100/exterior.png',
  iconSize: [35, 35], // size of the icon
  iconAnchor: [1, 1], // point of the icon which will correspond to marker's location
  popupAnchor: [-1, -2] // point from which the popup should open relative to the iconAnchor
})

export default function Maps() {
  const dispatch=useDispatch()
  const myloc=useSelector(state=>state.myLoc.loc)
  const college=useSelector(state=>state.colleges.selected)
  const pgs=useSelector(state=>state.pgs.pgs)
  

  console.log(myloc)
  useEffect(()=>{
   if(college){const loca=college?.loc.coordinates
  const raw = JSON.stringify({
    "latitude": loca[0],
    "longitude": loca[1],
    "distance": 1000
  });

  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type":"application/json"
    },
    body: raw,
    redirect: "follow"
  };
  
  fetch("https://placebackend.animeshk.me/api/nearbyplaces", requestOptions)
    .then((response) => response.json())
    .then((result) => {dispatch(pgsAction.setPgs(result))})
    .catch((error) => console.error(error));}
  },[college])
  
  //const position = [51.505, -0.09]
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      dispatch(mylocAction.setLoc([position.coords.latitude,position.coords.longitude]))
    });
  },[])
  return (
    <div className={classes.container}>
      {myloc.length>0?(<MapContainer center={myloc} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={myloc}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {college&&<Marker position={college.loc.coordinates} icon={collegeIcon}>
          <Popup>
            another one
          </Popup>
        </Marker>}
        {pgs&&pgs.map((f)=>{return(<Marker position={f.loc.coordinates} icon={housingIcon}>
          <Popup>
            {f.name}
          </Popup>
        </Marker>)})}
      </MapContainer>):<p>loading...</p>}
      <Form />
    </div>
  )
}
