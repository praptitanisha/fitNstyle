router.post('/admin', async (req, res) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(401).send('Access denied');
  
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      if (!user || user.role !== 'admin') return res.status(403).send('Admin access required');
      res.send('Admin Panel Accessed');
    } catch (err) {
      res.status(500).send('Server error');
    }
  });
  