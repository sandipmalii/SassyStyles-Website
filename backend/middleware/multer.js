// import multer from "multer";

// const storage = multer.diskStorage({
//     filename:function(req,file,callback){
//         callback(null, file.originalname)
//     }
// })

// const upload = multer({storage})

// export default upload

import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads/");  // Folder where files will be stored
  },
  filename: function (req, file, callback) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    callback(null, file.fieldname + "-" + uniqueSuffix + ext);
  }
});

const upload = multer({ storage });

export default upload;
