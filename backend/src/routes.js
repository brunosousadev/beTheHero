const express = require('express');
const { celebrate, Segments, Joi} = require('celebrate');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const Validators = require('./validators/Validators');
const routes = express.Router();

routes.post('/sessions', Validators.session ,SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ongs', Validators.createOngValidator ,OngController.store);

routes.get('/profile', Validators.profileValidator ,ProfileController.index);

routes.post('/incidents', Validators.createIncident,IncidentController.store);
routes.get('/incidents',Validators.getIncidents,IncidentController.index);
routes.delete('/incidents/:id',Validators.deleteIncident,IncidentController.delete);

module.exports = routes;