const axios = require('axios')

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

    // Fetch listing with reviews and owner populated
    const list = await listing.findById(id)
        .populate({
            path: 'reviews',
            populate: { path: 'author' },
        })
        .populate('owner');

    if (!list) {
        req.flash('error', 'Listing you requested for does not exist');
        return res.redirect('/listing');
    }

    const coordinates = list.geometry?.coordinates; // now will always be real coordinates


    // Pass to template
    res.render('listing/listing.ejs', { list, coordinates });
};
module.exports.uploadPost = async (req, res) => {
    try {
        const { title, description, price, location, country } = req.body;

        // Convert location to coordinates using Nominatim
        const geoRes = await axios.get("https://nominatim.openstreetmap.org/search", {
            params: {
                q: `${location}, ${country}`,
                format: "json",
                limit: 1,
            },
        });

        // If Nominatim returned results, use them, else reject
        if (!geoRes.data.length) {
            req.flash('error', 'Could not find coordinates for this location. Please enter a valid location.');
            return res.redirect('/listing/new');
        }

        const coordinates = [
            parseFloat(geoRes.data[0].lon), // longitude
            parseFloat(geoRes.data[0].lat), // latitude
        ];

        const newListing = new listing({
            title,
            description,
            price,
            location,
            country,
            geometry: { type: "Point", coordinates },
            owner: req.user._id,
        });

        // Add image if uploaded
        if (req.file) {
            newListing.image = { url: req.file.path, filename: req.file.filename };
        }

        await newListing.save();

        req.flash('success', 'New listing created');
        res.redirect('/listing');
    } catch (err) {
        console.error(err);
        req.flash('error', 'Failed to create listing');
        res.redirect('/listing/new');
    }
};


module.exports.updatePost = async (req, res) => {
    const { id } = req.params;
    const list = await listing.findById(id)


    res.render('listing/edit.ejs', { list })
}


module.exports.editPost = async (req, res) => {
    try {
        const { id } = req.params;

        // Prepare update object
        const updateData = { ...req.body.listing };

        // If new image uploaded
        if (req.file) {
            updateData.image = {
                url: req.file.path,
                filename: req.file.filename,
            };
        }

        const updatedList = await listing.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true,
        });

        console.log(updatedList);
        req.flash('success', 'Listing updated successfully!');
        res.redirect(`/listing/${id}`);
    } catch (err) {
        console.error(err);
        req.flash('error', 'Something went wrong while updating!');
        res.redirect(`/listing/${id}/edit`);
    }
};
module.exports.destroyPost = async (req, res) => {
    const { id } = req.params;
    const deletedList = await listing.findByIdAndDelete(id)

    req.flash('success', 'listing deleted successfully')

    res.redirect('/listing')
}