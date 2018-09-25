var cityModel = require('../models/cityModel.js');

/**
 * cityController.js
 *
 * @description :: Server-side logic for managing cities.
 */
module.exports = {

    /**
     * cityController.list()
     */
    list: function(req, res) {
        cityModel.find(function(err, cities){
            if(err) {
                return res.status(500).json({
                    message: 'Error getting cities.'
                });
            }
            return res.json(cities);
        });
    },

    /**
     * cityController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        cityModel.findOne({_id: id}, function(err, city){
            if(err) {
                return res.status(500).json({
                    message: 'Error getting city.'
                });
            }
            if(!city) {
                return res.status(404).json({
                    message: 'No such city'
                });
            }
            return res.json(city);
        });
    },

    /**
     * cityController.create()
     */
    create: function(req, res) {
        var city = new cityModel({
            name : req.body.name,
            state : req.body.state,
            country : req.body.country,
            dial_code : req.body.dial_code,
            city_flag : req.body.city_flag,
            country_flag :req.body.country_flag
        });

        city.save(function(err, city){
            if(err) {
                return res.status(500).json({
                    message: 'Error saving city',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: city._id
            });
        });
    },

    /**
     * cityController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        cityModel.findOne({_id: id}, function(err, city){
            if(err) {
                return res.status(500).json({
                    message: 'Error getting the city',
                    error: err
                });
            }
            if(!city) {
                return res.status(404).json({
                    message: 'No such city'
                });
            }
            
            city.name = req.body.name ? req.body.name : city.name;
            city.state = req.body.state ? req.body.state : city.state;
            city.country = req.body.country ? req.body.country : city.country;
            city.dial_code = req.body.dial_code ? req.body.dial_code : city.dial_code;
            city.city_flag = req.body.city_flag ? req.body.city_flag : city.city_flag;
            city.country_flag = req.body.country_flag ? req.body.country_flag : city.country_flag;
			
            city.save(function(err, city){
                if(err) {
                    return res.status(500).json({
                        message: 'Error saving the city.'
                    });
                }
                if(!city) {
                    return res.status(404).json({
                        message: 'No such city'
                    });
                }
                return res.json(city);
            });
        });
    },

    /**
     * cityController.remove()
     */
    remove: function(req, res) {
        var id = req.params.id;
        cityModel.findByIdAndRemove(id, function(err, city){
            if(err) {
                return res.status(500).json({
                    message: 'Error getting and deleting city.'
                });
            }
            return res.json(city);
        });
    }
};