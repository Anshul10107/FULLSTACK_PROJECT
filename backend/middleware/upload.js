const multer = require("multer");
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const storage = multer.memoryStorage();
const upload = multer({ storage });

const uploadAndCrop = (fieldName) => {
  return [
    upload.single(fieldName),
    async (req, res, next) => {
      if (!req.file) return next();

      if (!fs.existsSync("uploads")) {
        fs.mkdirSync("uploads");
      }

      const filename = `${Date.now()}.jpg`;
      const outputPath = path.join("uploads", filename);

      try {
        await sharp(req.file.buffer)
          .resize(450, 350)
          .toFile(outputPath);

        req.file.path = `/${outputPath}`;
        next();
      } catch (err) {
        next(err);
      }
    }
  ];
};

module.exports = uploadAndCrop;
