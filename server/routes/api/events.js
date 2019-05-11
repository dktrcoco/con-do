const { Events, User } = require("../../db/models");
const router = require("express").Router();


router.route("/committee/:committeeId")
    .get(function (req, res) {
                Events.findAll({
                    where: {
                        committeeId: [req.params.committeeId, 1000]
                    }
                })
                    .then(function (events) {
                        res.send(events)
                    })
            })

//get all events
router.route("/")
    .get(function (req, res){
        Events.findAll()
            .then(function(eventsData){
                res.send(eventsData)
            })
    })
    .post(function (req, res) {
        if (req.user.userType === "admin") {
            Events.create(req.body)
                .then(function (createdEvent) {
                    // console.log(createdEvent)
                    res.send(createdEvent)
                })
        }
    })
//get events for logged in user
router.route("/my")
    .get(function (req, res){
        //if the user is an admin or an advisor they will be sent all events
        if(req.user.userType === "admin" || req.user.userType ==="advisor"){
            Events.findAll()
            .then(function(eventData){
                res.send(eventData)
            })
        }
        else{
            Events.findAll({
                where: {
                    committeeId: [req.user.committeeId, 1000]
                }
            })
            .then(function(eventData){
                res.send(eventData)
            })
        }
    })
router.route("/:id")
    .get(function (req, res){
        
        Events.findOne({
            where: {
                id: req.params.id
            }
        })
        .then(function(eventData){
            res.send(eventData)
        })
    })
    .put(function (req, res){
        // console.log("updating event " + req.params.id )
        // console.log(req.body)
        Events.update(
            req.body,
            {
                where:{
                    id: req.params.id
                }
            }
        )
        .then(eventData =>{
            res.send(eventData)
        })
    })
    .delete(function (req, res) {
        if (req.user.userType === "admin") {
            Events.destroy({
                where: {
                    id: req.params.id
                }
            })
                .then(deleted => {
                    res.end()
                })
        }
    })

module.exports = router;