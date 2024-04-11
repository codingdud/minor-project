import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { useDispatch,useSelector } from 'react-redux';
import { mylocAction } from '../../store/myloc';
import { pgsAction } from '../../store/pgs';
const myHeaders = new Headers();

import classes from './maps.module.css'
import { useEffect, useRef } from 'react';
import Form from '../components/form';


import { constomIcons } from '../utils/costomicons';




export default function Maps() {
  const dispatch=useDispatch()
  const myloc=useSelector(state=>state.myLoc.loc)
  const college=useSelector(state=>state.colleges.selected)
  const pgs=useSelector(state=>state.pgs.pgs)
  const mapref=useRef()
  

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
    .then(()=>{
      mapref.current.flyTo(college.loc.coordinates,12)
    })
    .catch((error) => console.error(error));}
  },[college])
  
  //const position = [51.505, -0.09]
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      dispatch(mylocAction.setLoc([position.coords.latitude,position.coords.longitude]))
    });
  },[])
  return (
    <div>
    <div className={classes.container}>
      {myloc.length>0?(<MapContainer ref={mapref} center={myloc} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={myloc} icon={constomIcons.marker}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {college&&<Marker position={college.loc.coordinates} icon={constomIcons.collegeIcon}>
          <Popup>
            another one
          </Popup>
        </Marker>}
        {pgs&&pgs.map((f)=>{return(<Marker position={f.loc.coordinates} icon={constomIcons.housingIcon}>
          <Popup>
            {f.name}
          </Popup>
        </Marker>)})}
      </MapContainer>):<p>loading...</p>}
      <Form />
    </div>
    <div>
      <h1>ml model</h1>
    </div>
    </div>
  )
}
