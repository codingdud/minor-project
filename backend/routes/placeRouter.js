const express=require('express')
const router=express.Router()
const {getPlace,getNearByPlace,getNearByFoods,getNearByColleges, getNearByUnivercities}=require('../controllers/placeController')

router.get('/',(req,res)=>{
    return res.json({message:'Welcome to the place API'})
})
router.get('/all',getPlace)
router.get('/nearbyplaces',getNearByPlace)
router.get('/nearbyfoods',getNearByFoods)
router.get('/nearbycolleges',getNearByColleges)
router.get('/nearbyuniversities',getNearByUnivercities)



module.exports = router
