const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signUp = (req, res, next) => {
    const name = req.query.name;
    const email = req.query.email;
    const password = req.query.password;
    const category = req.query.category;

    if(!email || !password|| !category || !name) {
        res.status(400).send({
            status: false,
            message: 'Please complete all fields.'
        });

        console.log('Please complete all fields.');
    }
    else {

        User.findOne({ email }).then(user => {
            if (user) {

                res.status(400).send({
                    status: false,
                    message: 'This email already exists'
                });
                console.log('This email already exists');

            }
            else {
                bcryptjs.hash(password, 7).then(
                    password => {
                        let studentUser = new User({
                            name, email, password, category
                        });
                        return studentUser.save();
                    }
                    
                )
                .then(() => {
                    res.status(200).send({
                        status: true,
                        message: 'Welcome ' + name + ', You have been registered succesfully'
                    });

                });
                console.log('Welcome ' + name + ', You have been registered succesfully');
            }
        });
    }
}
