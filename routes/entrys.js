const {Router}= require("express")
const httpEntry=require("../controllers/entrys")

const router = Router()

//Insertar datos
router.post("/", httpEntry.postInsertar)

router.get("/:holder", httpEntry.getListarXholder)

router.get("/:dia", httpEntry.getListarXDia)

router.get("/fechas/:fechaInicio/:fechaFinal", httpEntry.getListarXFechas)

router.put("/:salida", httpEntry.putEntradaSalida)


module.exports = router