import imagesModel from '../models/Images.js';

class ImageController {
    async fetchItems (req, res) {
        const { limit, offset, queryFilter, column, sort } = req.query;
        if (!req.user) {
            return res.status(401).json('Access deny');
        } else {
            // console.log('req.query = ', req.query);
            const data = await imagesModel.getAll(1, limit, offset);
            return res.status(200).json({ count: data.size, items: data.items});
        }

    }
}

export default new ImageController();