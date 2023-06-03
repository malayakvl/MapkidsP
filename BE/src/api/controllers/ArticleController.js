import articlesModel from '../models/Articles.js';

class ArticleController {
    async fetchItems (req, res) {
        console.log('here we are');
        const { limit, offset, queryFilter, column, sort } = req.query;
        if (!req.user) {
            return res.status(401).json('Access deny');
        } else {
            const data = await articlesModel.getAll(1, limit, offset);
            console.log(data);
            return res.status(200).json({ count: data.size, items: data.items});
        }

    }
}

export default new ArticleController();
