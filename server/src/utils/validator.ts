import Joi from 'joi';

export const createEmployeeValidationSchema = Joi.object({
  f_name: Joi.string().required(),
  l_name: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
  address: Joi.string().not().required(),
  gender: Joi.string().not().required(),
});
