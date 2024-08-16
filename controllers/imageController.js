const User = require('../models/User');


const imageData = [
    {
        imageUrl: "https://ladyish.vercel.app/_next/image?url=%2Fassets%2Fhome%2Fbanner%2Ftop.png&w=640&q=100",
        description: "A beautiful sunrise over the mountains."
    },
    {
        imageUrl: "https://ladyish.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75",
        description: "A serene beach at sunset."
    },
    {
        imageUrl: "https://ladyish.vercel.app/_next/image?url=%2Fassets%2Fhome%2Fbanner%2Ftop.png&w=640&q=100",
        description: "A bustling cityscape at night222222222."
    }
];
exports.sliderImage = async (req, res) => {
 
    res.send({imageData})
};
