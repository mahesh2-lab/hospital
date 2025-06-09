export const roleMiddleware = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(403).json({ message: 'Forbidden access' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: `Forbidden access only ${roles.join(', ')}` });
    }

    next();
  };
};