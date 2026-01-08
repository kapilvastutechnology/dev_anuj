import Review from "../models/Review.js";


export const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find({product: req.id}).populate([
            {
                path: 'user',
                model: 'User',
                select: '-password'
            }
        ]);
        return res.status(200).json(reviews);
    } catch (err) {
        return res.status(500).json({
            status: 'error',
            message: err.message
        });
    }
}

export const createReview = async (req, res) => {
    const { rating, comment, product,user} = req.body ?? {};
        try {
            await Review.create({
                rating,
                comment,
                product,
                user:req.userId
            });

            return res.status(201).json({
                status: 'success',
                message: 'review created successfully'
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message
            });
        }
}