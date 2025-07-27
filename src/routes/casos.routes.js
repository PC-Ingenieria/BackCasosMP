import {Router} from 'express';
import {
  createCasos,
  deleteCasos,
  getCaso,
  getCasos,
  updateCasos,
  getTipoDelito,
  getEtapa,
  getFiscalias,
  getFiscales,
} from "../controllers/casos.controllers.js";

const router = Router();

/*********************CASOS*************************/

router.get("/casos", getCasos);

router.get("/casos/:id", getCaso);

router.post("/casos", createCasos);

router.put("/casos/:id", updateCasos);

router.delete("/casos/:id", deleteCasos);

/*********************TIPO DE DELITO*************************/

router.get("/tipodelito", getTipoDelito);

/*********************ETAPA DEL CASO*************************/

router.get("/etapa", getEtapa);

/*********************FISCALIAS*************************/
router.get("/fiscalias", getFiscalias);

/*********************FISCAL*************************/
router.get("/fiscales", getFiscales);

export default router;