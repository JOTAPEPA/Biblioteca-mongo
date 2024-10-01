const entrys = require('../models/entrys');
const { postInsertar } = require('./holders');
const httpEntry = {

    postInsertar: async (req, res) => {
        try {
            const { laptop, holder, entrytime, checkout, type } = req.body;
            const newEntry = new entrys({ laptop, holder, entrytime, checkout, type });
            await newEntry.save();
            res.status(201).json({ message: "Entrada creada correctamente" });
        }
        catch (error) {
            res.status(400).json({ error: "La operacion no se realizo correctamente" })
            console.log(error);
        }
    },

    getListarXholder: async (req, res) => {
        try {
            const { holder } = req.params;
            const entry = await entrys.find({ holder });
            res.json({ entry });
        } catch (error) {
            res.status(400).json({ error: "La operacion no se realizo correctamente" })
            console.log(error);
        }
    },

    getListarXDia: async (req, res) => {
        try {
            const { dia } = req.params;
            const startOfDay = new Date(dia);
            const endOfDay = new Date(dia);
            endOfDay.setDate(endOfDay.getDate() + 1);
            const entry = await Entrys.find({
                entrytime: { $gte: startOfDay, $lt: endOfDay }
            });
            res.json({ entry })
        } catch (error) {
            res.status(400).json({ error: "la  operacion no se realizo correctamente" })
            console.log(error);
        }
    },

    getListarXFechas: async (req, res) => {
        try {
            const { fechaInicio, fechaFinal } = req.params
            const fecha1 = new Date(fechaInicio);
            const fecha2 = new Date(fechaFinal);
            const entrys = await Entrys.find({
                entrytime: { $gte: fecha1, $lt: fecha2 }
            });
            res.json({ entrys })
        } catch (error) {
            res.status(400).json({ error: "la  operacion no se realizo correctamente" })
            console.log(error);

        }
    },

    putEntradaSalida: async (req, res)=>{
        try {
            const {salida} = req.params;
            const {id} = req.body;
            const {laptop, entrytime, checkout, type} = req.body;
            const entry= await Entrys.findByIdAndUpdate(id,{type:salida},{ new: true})
            res.json({entry})
        } catch (error) {
            res.status(400).json({error:"la operacion no se realizo correctamente"})
        }
    }




}


module.exports = httpEntry;