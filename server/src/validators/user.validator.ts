import Joi from "joi";

// Register a user
export interface RegisterUserBody {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accountTypeId: string;
}

export const registerUserBody = Joi.object<RegisterUserBody>({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  accountTypeId: Joi.string().required(),
});

// Update a user
export type UpdateUserBody = Partial<Omit<RegisterUserBody, "password">>;

export const updateUserBody = Joi.object<UpdateUserBody>({
  firstName: Joi.string(),
  lastName: Joi.string(),
  email: Joi.string().email(),
  accountTypeId: Joi.string(),
});
