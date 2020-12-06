const Model = require('../models/Model');

module.exports = {
    create: (req, res) => {
        let park = new Model({
           name: req.body.name,
        location: req.body.location,
        ranking: req.body.ranking
        })
        park.save()
        .then(result => {
            res.json({ success: true, result: result})
        })
        .catch(err => {
             res.json({ success: false, result: err})
            })
    },

    update: (req, res) => {
    Model.update({_id: req.body._id}, req.body)
    .then(park => {
        if (!park) res.json({ success: false, result: "No such park exists"})
      
        res.json(park)
    })
      .catch(err => {
          res.json({ success: false, result: err})
      })
    },

    retrieve: (req, res) => {
        Model.find()
        .then(park => {
            if (!park) res.json({ success: false, result: "No parks found"})

            res.json({ sucess: true, result: result})
        })
        .catch(err => {
            res.json({ success: false, result: err})
        })
    },

    delete: (req, res) => {
        Model.remove({ _id: req.body._id})
        .then(park => {
            if (!park) res.json({ success: false, result: "No park with such ID was found" })
            res.json({ success: true, result: result })
        })
        .catch(err => res.json({success: false, result: err}))
    }
}