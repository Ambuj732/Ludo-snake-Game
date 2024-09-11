const logout = (req, res) => {
  try {
    res.status(200).json({
      message: "User logged out successfully",
    });
  } catch (error) {
    console.log("Logout error:", error);
    res.status(500).json({
      message: "Failed to log out",
    });
  }
};

export { logout };
