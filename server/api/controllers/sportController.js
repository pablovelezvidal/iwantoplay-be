const SportModel = require('../models/SportModel.js');

/**
 * sportController.js
 *
 * @description :: Server-side logic for managing sports.
 */
module.exports = {

  /**
   * sportController.list()
   */
  list: (req, res) => {
    SportModel.find((err, sports) => {
      if (err) {
        return res.status(500).json({
          message: 'Error getting sports.',
        });
      }
      return res.json(sports);
    });
  },

  /**
   * sportController.show()
   */
  show: (req, res) => {
    const id = req.params.id;
    SportModel.findOne({ _id: id }, (err, sport) => {
      if (err) {
        return res.status(500).json({
          message: 'Error getting sport.',
        });
      }
      if (!sport) {
        return res.status(404).json({
          message: 'No such sport',
        });
      }
      return res.json(sport);
    });
  },

  /**
   * sportController.create()
   */
  create: (req, res) => {
    const sport = new SportModel({
      name: req.body.name,
      icon: req.body.icon,
    });

    sport.save((err, sport) => {
      if (err) {
        return res.status(500).json({
          message: 'Error saving sport',
          error: err,
        });
      }
      return res.json({
        message: 'saved',
        _id: sport._id,
      });
    });
  },

  /**
   * sportController.update()
   */
  update: (req, res) => {
    const id = req.params.id;
    SportModel.findOne({ _id: id }, (err, sport) => {
      if (err) {
        return res.status(500).json({
          message: 'Error getting the sport',
          error: err,
        });
      }
      if (!sport) {
        return res.status(404).json({
          message: 'No such sport',
        });
      }

      sport.name = req.body.name ? req.body.name : sport.name;
      sport.icon = req.body.icon ? req.body.icon : sport.icon;

      sport.save((err, sport) => {
        if (err) {
          return res.status(500).json({
            message: 'Error saving the sport.',
          });
        }
        if (!sport) {
          return res.status(404).json({
            message: 'No such sport',
          });
        }
        return res.json(sport);
      });
    });
  },

  /**
   * sportController.remove()
   */
  remove: (req, res) => {
    const id = req.params.id;
    SportModel.findByIdAndRemove(id, (err, sport) => {
      if (err) {
        return res.status(500).json({
          message: 'Error getting and deleting sport.',
        });
      }
      return res.json(sport);
    });
  },
};
