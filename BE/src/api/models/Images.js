import pool from './connect.js';
import { logger } from '../../common/logger.js';

class Images {
    async fileUpload (req, res) {
        // const dirUpload = `${process.env.DOWNLOAD_FOLDER}/logos`;
        const storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, `public/uploads/locationImages`);
            },
            filename: function (req, file, cb) {
                cb(null, Date.now() + '-' + file.originalname);
            }
        });
        const upload = multer({ storage: storage }).single('file');
        upload(req, res, async function (err) {
            if (err instanceof multer.MulterError) {
                return res.status(500).json(err);
            } else if (err) {
                return res.status(500).json(err);
            }
            const dataUser = {};
            if (req.file) {
                dataUser.file = `/uploads/logos/${req.file.filename}`;
            }
            return res.status(200).json({ success: true });
        });
    }

    async getAll (page, perPage = 20, reqOffset = null) {
        const client = await pool.connect();
        try {
            const _total = await client.query(`SELECT * FROM common__tools._select_total_from_table_by_where('data', 'images', 'id', null);`);
            const size = _total.rows[0].total;
            // const perPage = 20;
            let offset;
            if (reqOffset) {
                offset = reqOffset;
            } else {
                offset = (Number(page) - 1) * Number(perPage);
            }
            const res = await client.query(`SELECT * FROM common__tools.get_notifications(${perPage}, ${offset}, 'user_id=''${userId}'' AND is_read=${isRead}', 'created_at DESC')`);
            const notifications = res.rows.length > 0 ? res.rows : [];
            const error = null;

            return {
                notifications,
                size,
                error
            };
        } catch (e) {
            if (process.env.NODE_ENV === 'development') {
                logger.log(
                    'error',
                    'Model error (Notifications getAll):',
                    { message: e.message }
                );
            }
            const users = null;
            const error = {
                code: 500,
                message: 'Error get list of users'
            };
            return {
                users,
                error
            };
        } finally {
            client.release();
        }
    }
}

export default new Images();
