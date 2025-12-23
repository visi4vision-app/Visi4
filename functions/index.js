const functions = require("firebase-functions");
const cloudinary = require("cloudinary").v2;

/* ===== CONFIG CLOUDINARY ===== */
cloudinary.config({
  cloud_name: functions.config().cloudinary.cloud_name,
  api_key: functions.config().cloudinary.api_key,
  api_secret: functions.config().cloudinary.api_secret,
});

/* ===== UPLOAD VIDÉO ===== */
exports.uploadVideo = functions.https.onRequest(async (req, res) => {
  try {
    const { videoUrl } = req.body;

    const result = await cloudinary.uploader.upload(videoUrl, {
      resource_type: "video",
      folder: "visi4/videos",
    });

    res.json({
      success: true,
      url: result.secure_url,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/* ===== FEED (ALGORITHME) ===== */
exports.getFeed = functions.https.onRequest((req, res) => {
  const { interests = [] } = req.body;

  const feed = interests.map((tag, i) => ({
    id: i,
    tag,
    score: Math.random() * 100,
  }));

  feed.sort((a, b) => b.score - a.score);
  res.json(feed);
});

/* ===== INTERACTIONS ===== */
exports.likeVideo = functions.https.onRequest((req, res) => {
  res.json({ status: "video liked" });
});

exports.commentVideo = functions.https.onRequest((req, res) => {
  res.json({ status: "comment added" });
});

exports.registerView = functions.https.onRequest((req, res) => {
  res.json({ status: "view recorded" });
});

/* ===== WEBRTC SIGNALING ===== */
exports.signaling = functions.https.onRequest((req, res) => {
  res.json({
    type: "signal",
    data: req.body,
  });
});
