const user = require('./../models/user.js')
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')


module.exports={
    saveUser : async (req, res) => {
        try {
            const { name, lastname, email, password, phone, role } = req.body;
    
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
    
            const newUser = new user({
                name,
                lastname,
                email,
                password: hashedPassword,
                phone,
                role,
            });
    
            const dataUserSave = await newUser.save();
    
            return res.status(201).json({
                status: true,
                dataUserSave,
            });
        } catch (error) {
            return res.status(500).json({
                status: false,
                error,
            });
        }
    },
    obtainAllUsers : async (req, res) => {
        try {
            const dataUsers = await user.find()
            return res.status(200).json({
                "status": true,
                "dataUsers": dataUsers
            })
        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
    
    },
    findUserById : async (req, res) => {
        try {
            const id = req.params.id
            const dataUser = await user.findById(id)
            return res.status(200).json({
                "status": true,
                "dataUser": dataUser
            })
        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
    },
    deleteUser : async (req, res) => {
        try {
            const id = req.params.id
            const userDeleted = await user.findByIdAndDelete(id)
            return res.status(200).json({
                "status": true,
                "userDeleted": userDeleted
            })
        } catch (error) {
            return res.status(500).json({
                "status": false,
                "error": error
            })
        }
    },
    updateUser : async (req, res) => {
        
    },
    loginUser : async (req, res) => {
        
    },
    loginAdminSeller : async (req, res) => {
        
    },
    sendMailRecoveryPass : async (req, res) => {
        
    },
    updatePassword : async (req, res) => {
        
    }

}