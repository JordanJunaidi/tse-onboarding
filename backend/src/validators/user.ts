import { body } from "express-validator";

const makeNameValidator = () =>
  body("name")
    .exists()
    .withMessage("name is required")
    .bail()
    .isString()
    .withMessage("name must be string")
    .notEmpty()
    .withMessage("name cannot be empty");

const makeProfilePictureURLValidator = () =>
  body("profilePictureURL").optional().isString().withMessage("profilePictureURL must be string");

export const createUser = [makeNameValidator(), makeProfilePictureURLValidator()];
