export function isAuthenticated(req, res, next) {
  try {
    const token = req.headers['authorization'].split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized : NO TOKEN PROVIDED',
      });
    }
    return res.status(200).json({
      success: true,
      message: "You're successfully in",
    });
  } catch (err) {
    next(err);
  }
}
