// import imagesModel from '../models/Images.js';

class ImageController {
    async fetchItems (req, res) {
        let error;
        const testData = [
            { id: 1, title: 'Page 1' },
            { id: 2, title: 'Page 2' }
        ];
        if (testData) res.status(200).json({ items: [] });
        if (error) res.status(error.code).json({ error: 'Show error message' });
    }
}

export default new ImageController();