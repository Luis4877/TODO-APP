export const validateSchema = (Schema) => (req, res, next) => {
  try {
    Schema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json(error.errors.map((error) => error.message) );
  }
};
