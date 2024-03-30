import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import classes from './form.module.css'
import { collegeAction } from '../../store/colleges'



export default function Form() {
  const [choice,setChoice]=useState('allcolleges')
  const dispatch=useDispatch()
  const colleges=useSelector(state=>state.colleges.colleges)
  const college=useSelector(state=>state.colleges.selected)
  useEffect(()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://placebackend.animeshk.me/api/${choice}`,requestOptions)
    .then(response => response.json())
    .then(result => {
      dispatch(collegeAction.setColleges(result))})
    .catch(error => console.log('error', error));
  },[choice])
  const handleChange = (e) => {
    console.log(e.target.value)
    dispatch(collegeAction.setSelected(e.target.value))
  }
  function handleInput(e){
    console.log(e.target.value)
    setChoice(e.target.value)
  }
  return (
    <div>
      <div>
        <h2>Where You Study</h2>
        <input type="radio" id="allcolleges" name="choice" value="allcolleges" onChange={handleInput}/>
        <label for="allcolleges">Colllege</label>
        <input type="radio" id="universities" name="choice" value="alluniversities" onChange={handleInput}/>
        <label for="universities">Unversity</label>

      <p>Chose your {choice==='allcolleges'?'College':'University'}</p>
        <select name="course" defaultValue={college?.name||'college name'} onChange={handleChange}>
          {colleges&&colleges.map((data,index)=>data?.name&&(<option key={index} value={data._id}>{data.name}</option>))}
        </select>
      </div>
      
    </div>
  )
}








{/* <input  type="text"  list="colleges" onChange={handleInput}/>
      <datalist id='colleges'>
          {colleges&&colleges.map((data)=>data?.name&&(<option key={data._id}  value={data.name}>{data.city}</option>))}
      </datalist>
      <button type="submit">Submit</button> */}