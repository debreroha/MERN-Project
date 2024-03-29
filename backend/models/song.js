import mongoose from 'mongoose'

const Schema = mongoose.Schema;

const songSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  album: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  
}, {
    timestamps: true,
});

const Song = mongoose.model('Song', songSchema);

export default Song