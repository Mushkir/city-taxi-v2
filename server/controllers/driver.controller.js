// POST Method
// Driver registration
const CreateDriver = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ error: true, message: error?.message || "Error" });
  }
};
