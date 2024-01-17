const express = require("express");
const router = express("express");
const {
  getContact,
  createContact,
  deleteContact,
  updateContact,
  getContacts,
} = require("../controllers/contactController");

router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
