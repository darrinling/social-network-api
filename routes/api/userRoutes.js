const router = require("express").Router();
const {
  getAllUsers,
  getUserbyId,
  addUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

router.route("/").get(getAllUsers);
router.route("/:userId").get(getUserbyId);
router.route("/").post(addUser);
router.route("/:userId").put(updateUser);
router.route("/:userId").delete(deleteUser);
router.route("/:userId/friends/:friendId").post(addFriend);
router.route("/:userId/friends/:friendId").delete(deleteFriend);

module.exports = router;
