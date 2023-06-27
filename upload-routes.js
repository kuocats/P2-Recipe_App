const express = require("express");
const multer = require("multer");

const router = express.Router();

// Configure Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Set the destination directory where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname +
        "-" +
        uniqueSuffix +
        "." +
        file.originalname.split(".").pop()
    ); // Set the file naming convention
  },
});

const upload = multer({ storage: storage });

// Define route for file upload
router.post("/upload", upload.single("image"), function (req, res, next) {
  // Access the uploaded file via req.file
  // Perform any necessary processing or validation

  // Return a response to the client
  res.json({ message: "File uploaded successfully" });
});

module.exports = router;
