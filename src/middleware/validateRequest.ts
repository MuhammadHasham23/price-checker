import { Request, Response, NextFunction } from 'express';
import Ajv, { JSONSchemaType } from 'ajv';

const ajv = new Ajv();

export const validateRequest =  <T>(schema: JSONSchemaType<T>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const validate = ajv.compile(schema);
    const valid = validate(req.body);
    if (!valid) {
      return res.status(400).json({ errors: validate.errors });
    }
    next();
  };
};
