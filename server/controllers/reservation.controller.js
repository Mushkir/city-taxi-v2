export const Create = async (req, res) => {
  const loggedInUserId = req.userId;

  try {
    if (!loggedInUserId) {
      return res.status(401).json({ message: "Unauthorized", status: 401 });
    }

    console.log(loggedInUserId);
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message || "Error" });
  }
};
