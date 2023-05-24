const {Router} = require('express')
const auth = require('../middleware/auth.middleware');
const User = require('../models/User')
const router = Router();

// /api/user/all
router.get('/all',auth,
    async (req, res) => {
        try {
          const user = await User.find();
          res.json(user)
        } catch (e) {
          res.status(500).json({ message: `Что-то пошло не так, попробуйте снова   ${e}` })
        }
    }
)
// /api/user/delete/:id
router.delete('/delete/:id',auth, async (req, res) => {
    try {
      const  id  = req.params.id;
      await User.deleteOne({ _id: id });
      res.json({message:'200 успешно'})
    } catch (error) {
      res.status(400).json({ message: error })
    }
  });

  module.exports = router