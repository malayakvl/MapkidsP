import articlesModel from '../models/Article.js';

class ArticleController {
    async fetchItems (req, res) {
        const { limit, offset, queryFilter, column, sort } = req.query;
        if (!req.user) {
            return res.status(401).json('Access deny');
        } else {
            const data = await videoModel.getAll(1, limit, offset);
            console.log(data);
            return res.status(200).json({ count: data.size, items: data.items});
        }

    }
}

export default new ArticleController();
