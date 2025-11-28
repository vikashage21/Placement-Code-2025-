import mongoose from "mongoose"
import { user } from "../model/userSchema.js"
import e from "express"
export const userController = (req, res, next) => {
    res.json({
        "message": "welcome to my first express api"
    })
}


export const aboutController = (req, res, next) => {
    res.json({
        "developer": "vikash kumar",
        "role": "mern stack developer"
    })
}


export const getUsersAllController = async (req, res, next) => {
    try {
        const data = {
            userName: "vikash",
            email: "example@gamilcom",
            age: 21
        }
        res.json(data)
    } catch (error) {
        console.log(error)

    }

}

export const addNewUsersController = async (req, res, next) => {
    try {
        const { name, email } = req.body;
        // console.log(req)

        res.json({
            "message": 'user added',
            "data": {
                name, email
            }
        })

    } catch (error) {

        console.log(error)

    }

}


//  creating a user register api

export const userRegister = async (req, res, next) => {
    try {
        const { name, email, age } = req.body
        const data = {
            name,
            email,
            age
        }
        const newUser = await new user(data).save()

        console.log(data)

        // saving the data in mongodb database

        res.json({
            "message": "user registered",
            "user": {
                data
            }
        })
    } catch (error) {

        console.log('user registration error', error.message)

    }

}



export const getUserData = async (req, res, next) => {
    try {
        const users = await user.find({})
        res.json({
            "message": "users",
            "users": users
        })

    } catch (error) {

        console.log('user data is not found', error.message)

    }

}

export const removeUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id)
        const deletedUser = await user.findByIdAndDelete(id)

        res.json({
            'message': "user deleted",
            deletedUser

        })

    } catch (error) {
        console.log('user not deleted', error.message)

    }

}


export const updateUsersController = async (req, res, next) => {

    try {

        const { id } = req.params;

        const data = req.body

        const updatedUser = await user.findByIdAndUpdate(id, data)


        if (!updatedUser) {
            return res.json({
                'message': "user not fond",

            })
        }
        res.json({
            'message': "user updated",
            'data': updatedUser
        })




    } catch (error) {
        res.status(404).json({
            'message': error.message,
            "status": error.status
        })
    }

}

// searching users by email 


export const searchUsers = async (req, res, next) => {

    try {
        const { email } = req.query;
        console.log(req.query)
        const findUser = await user.findOne({
            email
        })

        if (!findUser) {
         return   res.json({
                'message': "user not found"
            })
        }

        res.json({
            'message': 'user found  by email',
            "data": findUser
        })

    } catch (error) {
        res.status(404).json({
            'message': error.message,
            "status": error.status
        })

    }
}