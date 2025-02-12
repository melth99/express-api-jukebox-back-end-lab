
const express = require('express')
const TrackModel = require('../models/track')
const router = express.Router()


//index
router.get('/', async function (req, res) {
    try {
        const trackIndex = await TrackModel.find({})
        res.status(200).json(`${trackIndex} track index works`)
    } catch (err) {
        res.status(500).json({ err: err.message })
        console.log('oh no index functionality didnt work see /index route')
    }
})
//show
router.get('/:trackId', async function (req, res) {
    try {
        const showTrack = await TrackModel.findById(req.params.trackId)
        res.status(200).json(`${showTrack}track show works`)
    } catch (err) {
        res.status(500).json({ err: err.message })
        console.log('oh no show functionality didnt work see /show route')
    }
})

//delete
router.delete('/:trackId', async function (req, res) {
    try {
        const deletedTrack = await TrackModel.findByIdAndDelete(req.params.trackId)
        res.status(201).json(deletedTrack)
    } catch (err) {
        console.log('deleting work', req.params.trackId)
        res.status(500).json({ err: err.message })
    }
})
//update
router.put('/:trackId', async function (req, res) {
    try {
        const updatedTrack = await TrackModel.findByIdAndUpdate(req.params.trackId, req.body, { new: true })
        console.log(updatedTrack, 'updated track')
        console.log(req.body, 'req.body')
        res.status(201).json(updatedTrack)
    } catch (err) {
        console.log('ERROR IN UPDATE put route')
        res.status(500).json({ err: err.message })
    }
})
//create
router.post('/', async function (req, res) {
    console.log(req)
    try {
        const newTrack = await TrackModel.create(req.body)
        console.log(newTrack)
        console.log(req.body)
        res.status(201).json(newTrack)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }

})

module.exports = router
