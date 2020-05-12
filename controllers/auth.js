const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { queryUser, registerUser } = require('../db-connection/db-con');

exports.signUp = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const category = req.body.category;

    if(!email || !password|| !category || !name) {
        res.status(400).send({
            status: false,
            message: 'Please complete all fields.'
        });

        console.log('Please complete all fields.');
    }
    else {
        console.log(queryUser(email));
        // if (queryUser(email) > 0) {
        //     res.status(400).send({
        //         status: false,
        //         message: 'This email already exists'
        //     });
        //     console.log('This email already exists');
        // } 
        // else {
        //     registerUser(name, email, password, category);
        //         res.status(200).send({
        //             status: true,
        //             message: 'Welcome ' + name + ', You have been registered succesfully'
        //         });
        //         console.log('Welcome ' + name + ', You have been registered succesfully');
        //     }
            // else {
            //     res.send('An error occured while registring you, please try again');
            //     console.log('An error occured while registring you, please try again');
            // }
        
        // try {
            
        //     User.findOne({ email }).then(user => {
        //         if (user) {
    
        //             res.status(400).send({
        //                 status: false,
        //                 message: 'This email already exists'
        //             });
        //             console.log('This email already exists');
    
        //         }
        //         else {
        //             bcryptjs.hash(password, 7).then(
        //                 password => {
        //                     let studentUser = new User({
        //                         name, email, password, category
        //                     });
        //                     return studentUser.save();
        //                 }
                        
        //             )
        //             .then(() => {
        //                 res.status(200).send({
        //                     status: true,
        //                     message: 'Welcome ' + name + ', You have been registered succesfully'
        //                 });
    
        //             });
        //             console.log('Welcome ' + name + ', You have been registered succesfully');
        //         }
        //     });

        // } catch (error) {
        //     console.log(error);
        //     res.send(error);
        // }
    }
}
