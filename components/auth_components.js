module.exports = function (mongo, ObjectID, url, assert, dbb) {
    var auth_components = {
        user_exist: function (email, callback) {
            try {
                mongo.connect(url, { useNewUrlParser: true }, function (err, db) {
                    assert.equal(null, err);
                    db.db().collection(dbb.USERS).findOne({ 'email': email },
                        function (err, result) {
                            if (err) {
                                callback(null, true, "Some Error Occured")
                                db.close();
                            }
                            else {
                                if (result) {
                                    callback(result, false, "email exists");
                                }
                                else {
                                    callback(null, true, "account does not exist");
                                }
                            }
                        });
                })
            }
            catch (err) {
                callback(null, true, err);
            }
        },

        login: function (email, password, callback) {
            try {
                let exist = false
                mongo.connect(url, { useNewUrlParser: true }, function (err, db) {
                    assert.equal(null, err);
                    var cursor = db.db().collection(dbb.USERS).find({ 'email': email });
                    cursor.forEach(function (doc, err) {
                        if (err) {
                            callback(null, true, "Some Error Occured");
                        }
                        else {
                            if (doc.password === password) {
                                exist = true;
                                value = doc;
                            }
                        }

                    }, function () {
                        if (exist) {
                            callback(value, false, "Login Successful");
                        }
                        else {
                            callback(null, true, "Invalid Credential");
                        }
                    })
                })

            }
            catch (error) {
                callback(null, true, error);
            }
        },
    }
    return auth_components;
}
