
module.exports = {
    configure: function(app, mongo, ObjectID, url, assert, dbb) {
        var user_components = require('../components/user_components')(mongo, ObjectID, url, assert, dbb);
        var auth_components = require('../components/auth_components')(mongo, ObjectID, url, assert, dbb);

        app.post('/sign_up', function(req, res) {
            try {
                if (req.body.hasOwnProperty("name") && req.body.hasOwnProperty("email") && req.body.hasOwnProperty("password") && req.body.hasOwnProperty("contact_num")) 
                {
                    var new_user = {
                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password,
                        contact_num: req.body.contact_num,
                        profile_pic: req.body.profile_pic,
                    }
    
                    auth_components.user_exist(req.body.email, function(result, exists, message) {
                        if(exists) {
                            user_components.sign_up(new_user, function (result, error, message) {
                                if (error) {
                                    res.json({ status: false, message: message });
                                }
                                else {
                                    res.json({ status: true, message: message, result: result });
                                }
                            })
                        }
                        else {
                            res.json({ status: false, message: message })
                        }
                    })
                }
                else {
                    if (req.body.hasOwnProperty("name") == false) {
                        res.json({ status: false, message: "name parameter is missing" });
                    }
                    else if (req.body.hasOwnProperty("email") == false) {
                        res.json({ status: false, message: "email parameter is missing" });
                    }
                    else if (req.body.hasOwnProperty("password") == false) {
                        res.json({ status: false, message: "Enter Your Password" });
                    }
                    else if (req.body.hasOwnProperty("contact_num") == false) {
                        res.json({ status: false, message: "Enter Your Contact Number" });
                    }
                    // else if (req.body.hasOwnProperty("user_profile_pic") == false) {
                    //     res.json({ status: false, message: "Enter Your Profile pic" });
                    // }
                }
            } catch(err) {
                res.json({ status: false, message: "failed at try block...!" + err });
            }
        });

        app.post('/login', function (req, res) {
            try {
                if (req.body.hasOwnProperty("password") && req.body.hasOwnProperty("email")) {

                    auth_components.login(req.body.email, req.body.password, function (result, exists, message) {
                        if (exists) {
                            res.json({ status: false, message: message });
                        }
                        else {
                            res.json({ status: true, message: message, result: result });
                        }
                    })

                }
                else {
                    if (req.body.hasOwnProperty("email") == false) {
                        res.json({ status: false, message: "email parameter is missing" });
                    } else if (req.body.hasOwnProperty("password") == false) {
                        res.json({ status: false, message: "Enter Your Password" });
                    }
                }
            } catch (er) {
                console.log("error occures: " + er);
                res.json({ status: false, message: "failed at try block...!" });
            }
        });
    }
}
