const express = require("express")
const VideoController = require("../modules/video/controller")

const router = express.Router()

router.post("/video", VideoController.newVideo)
router.get("/video", VideoController.getVideos)
router.delete("/video/:id", VideoController.deleteVideo)
router.put("/video/:id", VideoController.editVideo)

module.exports = router
