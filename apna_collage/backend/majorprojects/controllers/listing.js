

const listing = require('../models/listing')
module.exports.index = async (req, res) => {
    const allListing = await listing.find({});
    res.render('listing/index.ejs', { allListing })

}

module.exports.newPost = async (req, res) => {

    res.render('listing/new.ejs')
}


module.exports.post = async (req, res) => {
    const { id } = req.params;
    const list = await listing.findById(id).populate({
        path: 'reviews',
        populate: {
            path: "author"
        }
    }).populate('owner');



    if (!list) {
        req.flash('error', 'Listing you requested for does not exist')
        return res.redirect('/listing')
    }


    res.render('listing/listing.ejs', { list })

}

module.exports.uploadPost = async (req, res, next) => {


    console.log(req.body)


    const { title, description, image, price, location, country } = req.body;


    const allListing = new listing({
        title,
        description,
        image,
        price,
        location,
        country,
        owner: req.user._id

    })



    if (req.file) {
        // Save the Cloudinary URL and filename
        allListing.image = {
            url: req.file.path,
            filename: req.file.filename
        } // Cloudinary URL
    }




    const newlisting = await allListing.save()



    req.flash('success', 'New listing created')
    res.redirect('/listing')




}


module.exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const list = await listing.findById(id)


    res.render('listing/edit.ejs', { list })
}



module.exports.editPost = async (req, res) => {
    const { id } = req.params;






    const updatedList = await listing.findByIdAndUpdate(id, {
        ...req.body, image: {
            url: req.file.path,
            filename: req.file.filename

        }
    })




    console.log(updatedList)
    req.flash('success', 'New listing edited')

    res.redirect(`/listing/${id}`
    )


}


module.exports.destroyPost = async (req, res) => {
    const { id } = req.params;
    const deletedList = await listing.findByIdAndDelete(id)
   
    req.flash('success', 'listing deleted successfully')

    res.redirect('/listing')
}