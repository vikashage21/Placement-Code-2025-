


const sampleData = [
    {
        title: "Cozy Mountain Cabin",
        description: "A peaceful retreat in the mountains.",
        image:
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        price: 120,
        location: "Manali",
        country: "India",
    },
    {
        title: "Beachfront Villa",
        description: "Enjoy the ocean breeze in this luxury villa.",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        price: 300,
        location: "Goa",
        country: "India",
    },
    {
        title: "Urban Loft",
        description: "Modern loft apartment in the city center.",
        image:
            "https://images.unsplash.com/photo-1494526585095-c41746248156",
        price: 180,
        location: "New York",
        country: "USA",
    },
    {
        title: "Desert Camp",
        description: "Experience the desert lifestyle.",
        image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        price: 90,
        location: "Jaisalmer",
        country: "India",
    },
    {
        title: "Lake House",
        description: "Stay by the calm waters of the lake.",
        image:
            "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        price: 150,
        location: "Nainital",
        country: "India",
    },
    {
        title: "Snow Chalet",
        description: "A warm stay surrounded by snow.",
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        price: 250,
        location: "Switzerland",
        country: "Switzerland",
    },
    {
        title: "Safari Tent",
        description: "Stay in a luxurious safari tent in the wild.",
        image:
            "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
        price: 200,
        location: "Kenya",
        country: "Kenya",
    },
    {
        title: "Tokyo Apartment",
        description: "Compact and cozy stay in Tokyo city.",
        image:
            "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
        price: 220,
        location: "Tokyo",
        country: "Japan",
    },
    {
        title: "Paris Studio",
        description: "Romantic studio near the Eiffel Tower.",
        image:
            "https://images.unsplash.com/photo-1508057198894-247b23fe5ade",
        price: 260,
        location: "Paris",
        country: "France",
    },
    {
        title: "Countryside Cottage",
        description: "A calm escape in the countryside.",
        image:
            "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
        price: 130,
        location: "Yorkshire",
        country: "UK",
    },
    {
        title: "Forest Treehouse",
        description: "Stay in the heart of the forest.",
        image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        price: 190,
        location: "Oregon",
        country: "USA",
    },
    {
        title: "Island Hut",
        description: "Beachside hut with beautiful sunsets.",
        image:
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        price: 100,
        location: "Bali",
        country: "Indonesia",
    },
    {
        title: "Dubai Penthouse",
        description: "Luxury penthouse with skyline views.",
        image:
            "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
        price: 500,
        location: "Dubai",
        country: "UAE",
    },
    {
        title: "Historic Castle",
        description: "Live like royalty in this medieval castle.",
        image:
            "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
        price: 400,
        location: "Edinburgh",
        country: "Scotland",
    },
    {
        title: "Himalayan Homestay",
        description: "Stay with locals in the Himalayas.",
        image:
            "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
        price: 110,
        location: "Leh",
        country: "India",
    },
    {
        title: "Luxury Resort",
        description: "5-star resort experience.",
        image:
            "https://images.unsplash.com/photo-1501117716987-c8e1ecb210d9",
        price: 350,
        location: "Maldives",
        country: "Maldives",
    },
    {
        title: "Seoul Modern Flat",
        description: "Trendy flat in Seoul downtown.",
        image:
            "https://images.unsplash.com/photo-1501183638710-841dd1904471",
        price: 210,
        location: "Seoul",
        country: "South Korea",
    },
    {
        title: "Santorini House",
        description: "Traditional white house with sea view.",
        image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        price: 270,
        location: "Santorini",
        country: "Greece",
    },
    {
        title: "Berlin Loft",
        description: "Industrial style loft in Berlin.",
        image:
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        price: 230,
        location: "Berlin",
        country: "Germany",
    },
    {
        title: "Sydney Harbor Home",
        description: "Beautiful home near Sydney Harbor.",
        image:
            "https://images.unsplash.com/photo-1505691723518-36a5ac3b44d9",
        price: 280,
        location: "Sydney",
        country: "Australia",
    },
    {
        title: "Cairo Apartment",
        description: "Stay close to the pyramids.",
        image:
            "https://images.unsplash.com/photo-1518684079-7a1f9e5f3b6d",
        price: 140,
        location: "Cairo",
        country: "Egypt",
    },
    {
        title: "Venice Canal House",
        description: "Romantic house by the canals.",
        image:
            "https://images.unsplash.com/photo-1505159940484-eb2b9f9a6c6d",
        price: 260,
        location: "Venice",
        country: "Italy",
    },
    {
        title: "Toronto Condo",
        description: "High-rise condo with skyline views.",
        image:
            "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
        price: 240,
        location: "Toronto",
        country: "Canada",
    },
    {
        title: "Rio Beach House",
        description: "Beach house in Rio de Janeiro.",
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        price: 200,
        location: "Rio",
        country: "Brazil",
    },
    {
        title: "Cape Town Villa",
        description: "Luxury villa near Table Mountain.",
        image:
            "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb",
        price: 310,
        location: "Cape Town",
        country: "South Africa",
    },
    {
        title: "Bangkok Apartment",
        description: "Affordable stay in Bangkok city.",
        image:
            "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
        price: 130,
        location: "Bangkok",
        country: "Thailand",
    },
    {
        title: "Nepal Guest House",
        description: "Traditional guest house in Nepal.",
        image:
            "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
        price: 100,
        location: "Kathmandu",
        country: "Nepal",
    },
    {
        title: "Madrid Flat",
        description: "Modern flat in Madrid city.",
        image:
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        price: 200,
        location: "Madrid",
        country: "Spain",
    },
    {
        title: "Lisbon House",
        description: "Colorful house in Lisbon streets.",
        image:
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
        price: 190,
        location: "Lisbon",
        country: "Portugal",
    },
];

module.exports = { data: sampleData }
