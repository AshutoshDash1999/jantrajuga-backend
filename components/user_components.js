module.exports = function (mongo, ObjectID, url, assert, dbb) {
    var user_components = {

        sign_up: function (newUser, callback) {
            try {
                mongo.connect(url, { useNewUrlParser: true }, function (err, db) {
                    assert.equal(null, err)
                    db.db().collection(dbb.USERS).insertOne(newUser, function (err, result) {
                        if (err) {
                            callback(null, true, "Some Error Occured!");
                        }
                        else {
                            callback(result, false, "Successfully Registered")
                        }
                        db.close();
                    })
                });
            }
            catch (err) {
                callback(null, true, err);
            }
        },
    }
    return user_components
}