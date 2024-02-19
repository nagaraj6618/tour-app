import multer from "multer";

const storage = multer.diskStorage({
   destination: (req, file, cb) => {

      cb(null, 'tour-images/')
   },
   filename: (req, file, cb) => {
      cb(null, file.originalname)
   }
});

const upload = multer({ storage: storage })

export default upload