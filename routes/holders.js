const {Router}= require("express")
const httpHolder=require("../controllers/holders")

const router = Router()

//Insertar datos
router.post("/", httpHolder.postInsertar)

router.put("/:id", httpHolder.putModificar)

router.get("/:id", httpHolder.getListarXid)

router.get("/", httpHolder.getListarTodos)

router.put("/activar/:id", httpHolder.putActivar)

router.put("/inactivar/:id", httpHolder.putInactivar)

module.exports = router