const userModel = require('../models/profileModel');
const pool = require('../db');
// controllers/profileController.js


// class ProfileController {
//   static async getProfilePage(req, res) {
//     try {
//       const users = await UserModel.getAllUsers();
//       res.render('index', { users });
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   }
// }
async function getProfilePage(req, res) {
  try {
    console.log("sifjuodhfeiwf");
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error in getting the home');
  }
}



const updateUser = async (req, res) => {
  const userId = req.params.userId;
  const { username, email, password,country ,city,phonenumber} = req.body;
console.log(1111,username, email, password,country ,city,phonenumber);
  try {
    const updatedUser = await userModel.updateUser(userId, username, email, password,country,city,phonenumber);
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
    updateUser,
    
    getProfilePage
  };
  