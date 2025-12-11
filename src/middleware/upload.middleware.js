import multer from multer;
import path from 'path';

// Set storage engine
const allowedTypes=["application/pdf","application/msword"];

const storage = multer.diskStorage(
    {
        destination: (req,file,cb)=>{
            cb(null,"src/public/uploads/");
        },
        filename: (req,file,cb)=>{
            const uniqueName=Date.now() + "-" + file.originalname;
            cb(null,uniqueName);
        }
    }
);

const fileFilter=(req,file,cb)=>{
    if(allowedTypes.includes(file.mimetype)){
        cb(null,true);
    } else {
        cb(new Error("Invalid file type. Only PDF and DOC files are allowed."),false);
    }
};

//create the multer upload instance
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5 MB limit
});

export default upload.single("resume");

