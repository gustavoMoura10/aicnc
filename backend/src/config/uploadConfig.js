const multer = require('multer');
const path = require('path');
exports.storage = multer.diskStorage({
    destination:(req, file, c)=>{
        path.resolve(__dirname,'..','uploads');
    },
    filename:(req,file,cb) =>{
        cb(null,`${file.filename}-${Date.now()}${path.extname(file.originalname)}`);
    }
})