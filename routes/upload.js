const express = require('express');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
      callBack(null, './public/devices')
  },
  filename: (req, file, callBack) => {
      callBack(null, `${file.originalname}`)
  }
})
const uploads = multer({ storage: storage });
// express.use(express.static('public'))

router.post('/uploadprofilepicture', uploads.single('file'), (req, res, next) => {
  
  const file = req.file;
  var path;
  if (!file) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
  path = req.file.path;

  res.json({ fileUrl: 'http://localhost:4000/devices/' + req.file.filename , Imagename : req.file.filename});
})

module.exports = router;
