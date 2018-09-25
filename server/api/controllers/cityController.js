const CityModel = require('../models/CityModel.js');

/**
 * cityController.js
 *
 * @description :: Server-side logic for managing cities.
 */
module.exports = {

  /**
   * cityController.list()
   */
  list: (req, res) => {
    CityModel.find((err, cities) => {
      if (err) {
        return res.status(500).json({
          message: 'Error getting cities.',
        });
      }
      return res.json(cities);
    });
  },

  /**
   * cityController.show()
   */
  show: (req, res) => {
    const id = req.params.id;
    CityModel.findOne({ _id: id }, (err, city) => {
      if (err) {
        return res.status(500).json({
          message: 'Error getting city.',
        });
      }
      if (!city) {
        return res.status(404).json({
          message: 'No such city',
        });
      }
      return res.json(city);
    });
  },

  /**
   * cityController.create()
   */
  create: (req, res) => {
    const city = new CityModel({
      name: req.body.name,
      state: req.body.state,
      country: req.body.country,
      dial_code: req.body.dial_code,
      city_flag: req.body.city_flag,
      country_flag: req.body.country_flag,
    });

    city.save((err, city) => {
      if (err) {
        return res.status(500).json({
          message: 'Error saving city',
          error: err,
        });
      }
      return res.json({
        message: 'saved',
        _id: city._id,
      });
    });
  },

  /**
   * cityController.update()
   */
  update: (req, res) => {
    const id = req.params.id;
    CityModel.findOne({ _id: id }, (err, city) => {
      if (err) {
        return res.status(500).json({
          message: 'Error getting the city',
          error: err,
        });
      }
      if (!city) {
        return res.status(404).json({
          message: 'No such city',
        });
      }

      city.name = req.body.name ? req.body.name : city.name;
      city.state = req.body.state ? req.body.state : city.state;
      city.country = req.body.country ? req.body.country : city.country;
      city.dial_code = req.body.dial_code ? req.body.dial_code : city.dial_code;
      city.city_flag = req.body.city_flag ? req.body.city_flag : city.city_flag;
      city.country_flag = req.body.country_flag ? req.body.country_flag : city.country_flag;

      city.save((err, city) => {
        if (err) {
          return res.status(500).json({
            message: 'Error saving the city.',
          });
        }
        if (!city) {
          return res.status(404).json({
            message: 'No such city',
          });
        }
        return res.json(city);
      });
    });
  },

  /**
   * cityController.remove()
   */
  remove: (req, res) => {
    const id = req.params.id;
    CityModel.findByIdAndRemove(id, (err, city) => {
      if (err) {
        return res.status(500).json({
          message: 'Error getting and deleting city.',
        });
      }
      return res.json(city);
    });
  },
};
