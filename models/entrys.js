const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
    laptop: { type: mongoose.Schema.Types.ObjectId, ref: 'laptop', require: true },
    holder: { type: mongoose.Schema.Types.ObjectId, ref: 'holder', require: true },
    entrytime: { type: Date, default: Date.now },
    checkout: { type: Date, default: Date.now },
    type: { type: Number, default: 1 } //1:prestamo biblioteca 2:Ingreso porteria
}, {
    timestamps: true
})


module.exports = mongoose.model('entry', entrySchema)