const {Router} = require("express")
const {addTecnico, getTecnico, updTecnico, delTecnico, addRegistro, getRegistro} = require("../controllers/helpdesktop")
const router = Router()

///POST///
router.post("/addtecnico", addTecnico)
router.post("/addregistro", addRegistro)

router.get("/gettecnico", getTecnico)
router.get("/getregistro", getRegistro)

router.put("/updtecnico/id/:id", updTecnico)

router.delete("/deltecnico/id/:id", delTecnico)

module.exports = router