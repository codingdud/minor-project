import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import classes from './form.module.css'
import { collegeAction } from '../../store/colleges'
import { pgsAction } from '../../store/pgs'
import { BackgroundGradient } from './ui/background-gradiant'



export default function Form() {
  const [choice,setChoice]=useState('allcolleges')
  const dispatch=useDispatch()
  const colleges=useSelector(state=>state.colleges.colleges)
  const college=useSelector(state=>state.colleges.selected)
  const pgs=useSelector(state=>state.pgs.pgs)
  const selectedpg=useSelector(state=>state.pgs.selectedPg)
  useEffect(()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://placebackend.animeshk.me/api/${choice}`,requestOptions)
    .then(response => response.json())
    .then(result => {dispatch(collegeAction.setColleges(result))})
    .catch(error => console.log('error', error));
  },[choice])
  const handleChange = (e) => {
    console.log(e.target.value)
    dispatch(collegeAction.setSelected(e.target.value))
  }
  function handleInput(e){
    //console.log(e.target.value)
    setChoice(e.target.value)
  }
  function handleClick(id){
    //console.log("pg->",id)
    dispatch(pgsAction.setSelectedPg(id))
  }
  return (
    <div>
      <div style={{ maxHeight: '60vh',maxWidth:'60vh', overflowY: 'auto' }}>
        <h2>Where do You Study</h2>
        <input type="radio" id="allcolleges" name="choice" value="allcolleges" onChange={handleInput}/>
        <label for="allcolleges">Colllege</label>
        <input type="radio" id="universities" name="choice" value="alluniversities" onChange={handleInput}/>
        <label for="universities">Unversity</label>

      <p>Which {choice==='allcolleges'?'College':'University'} do you attend</p>
        <select name="course" defaultValue={college?.name||'college name'} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {colleges&&colleges.map((data,index)=>data?.name&&(<option key={index} value={data._id}>{data.name}</option>))}
        </select>
      </div>
      <div style={{ maxHeight: '62.5vh',maxWidth:'60vh', overflowY: 'auto' }}>
        {pgs&&pgs.map((data, index)=>data?.name&&(
        <div key={index+data._id} className={selectedpg===data._id?classes.cardselected:classes.card} onClick={()=>handleClick(data._id)}>
          <BackgroundGradient className={`rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900 dark:bg-white`}>
            <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
            {data.name}
            </p>
          <p className="text-sm text-neutral-400 dark:text-neutral-600">{data.address_line2}</p>
          <p>disdance:<strong>{Math.floor(data.distance)}</strong> <span className={classes.spam}>meter</span></p>
          </BackgroundGradient>
        </div>
        ))}
      </div>
      
    </div>
  )
}








{/* <input  type="text"  list="colleges" onChange={handleInput}/>
      <datalist id='colleges'>
          {colleges&&colleges.map((data)=>data?.name&&(<option key={data._id}  value={data.name}>{data.city}</option>))}
      </datalist>
      <button type="submit">Submit</button> */}