var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

/* GET home page. */
router.get('/', async function (req, res, next) {

var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades',{
    layout:'admin/layout',
    usuario: req.session.nombre, //valentin
    novedades
  });
});

// para eliminar una novedad 
router.get('/eliminar/:id', async (req, res, next) =>{
  var id = req.params.id;
  await novedadesModel.deleteNovedadesById(id);
  res.redirect('/admin/novedades')

 }); //cierra get de eliminar

 
module.exports = router;
