const express = require("express");
const router = express.Router();
const profileData = require("../data/profile");
const profileData = require("../data/profile");

router.get("/:user_id", async (req, res) => {
  let user_id = req.params.user_id;
  try {
    let user = await profileData.getUserInfo(user_id);
    res.render("posts/profile", { title: "Your profile", data: user });
  } catch (e) {
    res
      .status(401)
      .render("posts/profile", { title: "Your profile", message: e });
  }
});

router.delete("/delete/:user_id", async (req, res) => {
  //for admin only... sessions required
  //Delete a player's profile.
  try {
    let user_id = req.params.user_id;
    const deletedProfile = await booksData.deleteProfileById(user_id);
    if (deletedProfile == 1) {
      res.render("posts/admin-homepage", {
        title: "Admin Homepage",
        message: "Profile Deleted",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send({ message: e });
  }
});

module.exports = router;
