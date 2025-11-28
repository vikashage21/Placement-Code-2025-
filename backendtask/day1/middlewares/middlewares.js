import { user } from '../model/userSchema.js'

//  creating a middleware to validate the user


export const validate = async (req, res, next) => {
    try {
        const { name, email, age } = req.body
        const isValidEmail = await user.findOne({ email })
        if (!name || !email || !age) {
            // validate email also  -  if email is duplicate email registration

            return res.json({
                "success": false,
                "message": "All filed are required"
            })
        }
        if (isValidEmail) {

            return res.json({
                'success': false,
                'message': "email is already registered"
            })

        }


        next()
    } catch (error) {

    }

}