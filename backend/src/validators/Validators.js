const { celebrate, Segments, Joi } = require('celebrate');


module.exports.createOngValidator =
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.string().required().min(10).max(11),
            city: Joi.string().required(),
            uf: Joi.string().required().length(2)
        })
    });

module.exports.profileValidator = celebrate({
    [Segments.HEADERS]: Joi.object({ authorizatio: Joi.string().required() }).unknown(),
}); 

module.exports.session= celebrate({ 
    [Segments.BODY] : Joi.object().keys({ id: Joi.string().required() }),
    [Segments.HEADERS] : Joi.object({ authorizatio: Joi.string().required() }).unknown() 
});


module.exports.createIncident = celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required(),
    })
});


module.exports.getIncidents = celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    }),    
});


module.exports.deleteIncident =  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.HEADERS] : Joi.object({
        authorizatio: Joi.string().required()
    }).unknown()
})