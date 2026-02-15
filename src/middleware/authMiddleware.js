import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Not authorized" });

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};

export const isManager = (req, res, next) => {
  if (req.user.role !== "manager")
    return res.status(403).json({ message: "Managers only" });
  next();
};

export const isSalesAgent = (req, res, next) => {
  if (req.user.role !== "sales-agent")
    return res.status(403).json({ message: "Sales agents only" });
  next();
};
