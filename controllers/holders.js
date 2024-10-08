const Holder = require("../models/holders");
const httpHolder = {

    postInsertar: async (req, res) => {
        try {
            const { email, password, document, name, rol, ficha, photo, phone, state } = req.body;
            const newHolder = new Holder({ email, password, document, name, rol, ficha, photo, phone, state });
            await newHolder.save();
            res.status(201).json({ message: "Holder creado correctamente" });
        }
        catch (error) {
            res.status(400).json({ error: "La operacion no se realizo correctamente" })
            console.log(error);
        }


    },

    putModificar: async (req, res) => {
        try {
            const { id } = req.params;
            const { email, password, document, name, rol, ficha, photo, phone, state } = req.body;
            const holder = await Holder.findByIdAndUpdate(id, { email, password, document, name, rol, ficha, photo, phone, state });
            res.json({ holder })
        } catch (error) {
            res.status(400).json({ error: "La operacion no se realizo correctamente" })
            console.log(error);
        }

    },


    getListarTodos: async (req, res) => {
        try {
        const holders = await Holder.find();
        res.json({ holders });
    }catch (error) {
        res.status(400).json({ error: "La operacion no se realizo correctamente" })
        console.log(error);
    }
}, 

    getListarXid: async(req, res) => {
        try{
            const{id}=req.params;
            const holder=await Holder.findById(id);
            res.json({holder});
        }catch(error){
            res.status(400).json({error:"La operacion no se realizo correctamente"})
            console.log(error);
        }
    },

    putActivar: async(req, res) => {
        try{
            const{id}=req.params;
            const holder=await Holder.findByIdAndUpdate(id,{state:1});
            res.json({holder});
        }catch(error){
            res.status(400).json({error:"La operacion no se realizo correctamente"})
            console.log(error);
        }
    },

    putInactivar: async(req, res) => {
        try{
            const{id}=req.params;
            const holder=await Holder.findByIdAndUpdate(id,{state:0});
            res.json({holder});
        }catch(error){
            res.status(400).json({error:"La operacion no se realizo correctamente"})
            console.log(error);
        }
    }

    





};



module.exports = httpHolder