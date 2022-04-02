
module.exports = {
    configure: function(app, mongo, ObjectID, url, assert, dbb) {
        var vendor_components = require('../components/vendor_components')(mongo, ObjectID, url, assert, dbb);
    
        app.post('/vendor_signup', function(req, res) {
            try {
                // console.log(req.body);
                if (req.body.hasOwnProperty("vendor_name") && req.body.hasOwnProperty("vendor_email") && req.body.hasOwnProperty("password") && req.body.hasOwnProperty("contact_num") && req.body.hasOwnProperty("gst_num") && req.body.hasOwnProperty("address")) 
                {
                    var new_vendor = {
                        name: req.body.vendor_name,
                        email: req.body.vendor_email,
                        password: req.body.password,
                        contact_num: req.body.contact_num,
                        gst_num: req.body.gst_num,
                        address: req.body.address,
                    }
    
                    vendor_components.vendor_exist(req.body.vendor_email, function(result, exists, message) {
                        if(exists) {
                            vendor_components.vendor_signup(new_vendor, function (result, error, message) {
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
                    if (req.body.hasOwnProperty("vendor_name") == false) {
                        res.json({ status: false, message: "name parameter is missing" });
                    }
                    else if (req.body.hasOwnProperty("vendor_email") == false) {
                        res.json({ status: false, message: "email parameter is missing" });
                    }
                    else if (req.body.hasOwnProperty("password") == false) {
                        res.json({ status: false, message: "Enter Your Password" });
                    }
                    else if (req.body.hasOwnProperty("contact_num") == false) {
                        res.json({ status: false, message: "Enter Your Contact Number" });
                    }
                    else if (req.body.hasOwnProperty("gst_num") == false) {
                        res.json({ status: false, message: "Enter Your GST Number" });
                    }
                    else if (req.body.hasOwnProperty("address") == false) {
                        res.json({ status: false, message: "Enter Your Address" });
                    }
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
