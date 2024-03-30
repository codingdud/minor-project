const express=require('express')
const router=express.Router()
const {getPlace,getNearByPlace,getNearByFoods,getNearByColleges,getAllColleges, getNearByUnivercities,getAllUnivercities}=require('../controllers/placeController')

router.get('/',(req,res)=>{
    return res.json({message:'Welcome to the place API'})
})
router.get('/places',getPlace)
router.post('/nearbyplaces',getNearByPlace)
router.post('/nearbyfoods',getNearByFoods)
router.post('/nearbycolleges',getNearByColleges)
router.get('/allcolleges',getAllColleges)
router.get('/nearbyuniversities',getNearByUnivercities)
router.get('/alluniversities', getAllUnivercities)


module.exports = router
