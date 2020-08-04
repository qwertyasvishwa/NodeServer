const uniquestring = require("unique-string");
var Contact = require("../app/models/contact");

module.exports = function(app){
    app.get("/", function(req, res){
        Contact.find({}, function(err, showdata){
            res.render("index.ejs", {
                showdata: showdata,

            });
        });
        
    });

    app.post("/", function(req, res) {
        var vr = new Contact();

        vr.name = req.body.name;
        vr.email = req.body.email;
        vr.phone = req.body.phone;

        vr.save(function(err, doc){
            if(err) res.json(err);
            else{
            res.redirect("/");

            }
        });
    });

    app.get("/data", function(req, res){
        Contact.find({}, function(err, showdata){
            res.render("display.ejs", {
                showdata: showdata,

            });
        });
        
    });

};
