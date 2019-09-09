import multer from 'multer';
import uuid from 'uuid/v4';
import {extname} from 'path';

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        cb(null, uuid() + extname(file.originalname));
    }
});

export default multer({storage});