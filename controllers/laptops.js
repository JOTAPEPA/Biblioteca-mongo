const Laptop = require('../models/laptops');
const { put } = require('../routes/holders');
const { putModificar, getListarTodos, getListarXid, putActivar } = require('./holders');
const httpLaptop = {

    postInsertar: async (req, res) => {
        try {
            const { holder, serial, qrcode, state, Observations } = req.body;
            const newLaptop = new Laptop({ holder, serial, qrcode, state, Observations });
            await newLaptop.save();
            res.status(201).json({ message: "Laptop creado correctamente" });
        }
        catch (error) {
            res.status(400).json({ error: "La operacion no se realizo correctamente" })
            console.log(error);
        }
    },


    putModificar: async (req, res) => {
        try {
            const { id } = req.params;
            const { holder, serial, qrcode, state, Observations } = req.body;
            const laptop = await Laptop.findByIdAndUpdate(id, { holder, serial, qrcode, state, Observations });
            res.json({ laptop });
        } catch (error) {
            res.status(400).json({ error: "La operacion no se realizo correctamente" })
            console.log(error);
        }
    },

    getListarTodos: async (req, res) => {
        try {
            const laptops = await Laptop.find();
            res.json({ laptops });
        } catch (error) {
            res.status(400).json({ error: "La operacion no se realizo correctamente" })
            console.log(error);
        }
    },

    getListarXid: async (req, res) => {
        try {
            const { id } = req.params;
            const laptop = await Laptop.findById(id);
            res.json({ laptop });
        } catch (error) {
            res.status(400).json({ error: "La operacion no se realizo correctamente" })
            console.log(error);
        }
    },

    putActivar: async (req, res) => {
        try {
            const { id } = req.params;
            const laptop = await Laptop.findByIdAndUpdate(id, { state: 1 });
            res.json({ laptop });
        } catch (error) {
            res.status(400).json({ error: "La operacion no se realizo correctamente" })
            console.log(error);
        }
    },

    putInactivar: async (req, res) => {
        try {
            const { id } = req.params;
            const laptop = await Laptop.findByIdAndUpdate(id, { state: 0 });
            res.json({ laptop });
        } catch (error) {
            res.status(400).json({ error: "La operacion no se realizo correctamente" })
            console.log(error);
        }
    },

    PutGenerarQr:async (req, res)=> {
        try {
            const {serial} = req.params;
            const QRCodigo = await qrCodigo.toDataURL(serial);
            const laptop = await Laptops.findOneAndUpdate({serial},{qrcode:QRCodigo},{ new:true})
            res.json({laptop})
        } catch (error) {
             res.status(400).json({error:"operacion fallo"})
            console.log(error);
        }
    }
}

module.exports = httpLaptop;