const {Router}=require("express")
const httpLaptop=require("../controllers/laptops")


const router = Router()

//Insertar datos
router.post("/", httpLaptop.postInsertar)

router.put("/:id", httpLaptop.putModificar) 

router.get("/", httpLaptop.getListarTodos)

router.get("/:id", httpLaptop.getListarXid)

router.put("/activar/:id", httpLaptop.putActivar)

router.put("/inactivar/:id", httpLaptop.putInactivar)

router.put("/qr/:serial", httpLaptop.PutGenerarQr)


module.exports = router