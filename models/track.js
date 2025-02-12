mongoose = require('mongoose')

const TrackSchema = mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    }
})

TrackModel = mongoose.model("Track",TrackSchema)

module.exports = TrackModel