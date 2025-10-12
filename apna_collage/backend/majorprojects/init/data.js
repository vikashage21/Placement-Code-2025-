const sampleData = [
    {
        title: "Cozy Mountain Cabin",
        description: "A peaceful retreat in the mountains.",
        image: {
            url: "https://res.cloudinary.com/dsocyzrt7/image/upload/v1760288950/worderlust/hgh-daylight-wide-angle-exterior-rounded-b_vqqr5l.png",
            filename: "cozy-mountain"
        },
        price: 120,
        location: "Manali",
        country: "India",
    },
    {
        title: "Beachfront Villa",
        description: "Enjoy the ocean breeze in this luxury villa.",
        image: {
            url: "https://res.cloudinary.com/dsocyzrt7/image/upload/v1760288950/worderlust/HCM_P_8147067_4by3_he0tep.jpg",
            filename: "beach-villa"
        },
        price: 300,
        location: "Goa",
        country: "India",
    },
    {
        title: "Urban Loft",
        description: "Modern loft apartment in the city center.",
        image: {
            url: "https://res.cloudinary.com/dsocyzrt7/image/upload/v1760288950/worderlust/ah-aventura-hotel-exterior-facade-b_o98ycp.jpg",
            filename: "urban-loft"
        },
        price: 180,
        location: "New York",
        country: "USA",
    },
    {
        title: "Desert Camp",
        description: "Experience the desert lifestyle.",
        image: {
            url: "https://res.cloudinary.com/dsocyzrt7/image/upload/v1760288950/worderlust/JUNIOR-SUITE_209_-Bedroom-scaled_fnqd9s.jpg",
            filename: "desert-camp"
        },
        price: 90,
        location: "Jaisalmer",
        country: "India",
    },
    {
        title: "Lake House",
        description: "Stay by the calm waters of the lake.",
        image: {
            url: "https://res.cloudinary.com/dsocyzrt7/image/upload/v1760288950/worderlust/hotel_1_sfbo6g.png",
            filename: "lake-house"
        },
        price: 150,
        location: "Nainital",
        country: "India",
    },
];

module.exports = { data: sampleData };
