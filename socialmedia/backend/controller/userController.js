import {HttpError} from '../models/errorModel.js'
 
// ============== register user

// post : api/users/register


export const registerUser = async (req, res, next) => {
    try {
        res.json('register user')


    } catch (error) {
        return next(new HttpError(error))

    }

}




export const loginUser = async (req, res, next) => {
    try {
        res.json('Login user')


    } catch (error) {
        return next(new HttpError(error))

    }

}

export const getUser = async (req, res, next) => {
    try {
        res.json('single user')


    } catch (error) {
        return next(new HttpError(error))

    }

}

export const getUsers = async (req, res, next) => {
    try {
        res.json('all user')


    } catch (error) {
        return next(new HttpError(error))

    }

}

export const editUser = async (req, res, next) => {
    try {
        res.json('edit user')


    } catch (error) {
        return next(new HttpError(error))

    }

}

export const followUnfollowUser = async (req, res, next) => {
    try {
        res.json('follow user')


    } catch (error) {
        return next(new HttpError(error))

    }

}

export const changeUserAvatar = async (req, res, next) => {
    try {
        res.json('change avatar of user')


    } catch (error) {
        return next(new HttpError(error))

    }

}

