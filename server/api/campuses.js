const api = require('express').Router();
const { Campus } = require('../db/models');
//here is where our back-end routes will live


//GET api/campuses
api.get('/', (req, res, next) => {
  console.log('THIS IS CAMPUS: ', Campus);
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next);
});

//GET api/campuses/:campusId
api.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
    .then(campus => res.json(campus))
    .catch(next);
});

//POST api/campuses
api.post('/', (req, res, next) => {
  Campus.create(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});

//PUT api/campuses/:campusId
api.put('/:campusId', (req, res, next) => {
  const campusId = req.params.campusId;

  Campus.findById(campusId)
    .then(campus => campus.update(req.body))
    .catch(next);
});

//DELETE api/campuses/:campusId
api.delete('/:campusId', (req, res, next) => {
  const id = req.params.campusId;

  Campus.destroy({
    where: {id : id}
  })
    .then(() => res.status(204).end())
    .catch(next);
});

module.exports = api;
