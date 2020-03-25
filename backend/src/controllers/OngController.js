const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async index(request, response){
        try {
            const ongs = await connection('ongs').select('*');
            return response.json(ongs);
        } catch (error) {
            return response.status(404).json({error: 'Error while listing ONG'});
        }    
    },
    async store(request, response){
        try {
            const { name, email, whatsapp, city, uf } = request.body;
    
            const id = crypto.randomBytes(4).toString('HEX');
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            });
    
            return response.json({ id });
        
        } catch (error) {
            return response.status(404).json({error: 'Error creating ONG'});
        }        
    }
}