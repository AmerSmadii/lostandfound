const pool = require('../db');

// models/userModel.js


// class UserModel {
//   static async getAllUsers() {
//     try {
//       const users = await db.any('SELECT * FROM users');
//       return users;
//     } catch (error) {
//       throw error;
//     }
//   }
// }
async function getAllUsers() {
  try {
    console.log("lswnvkdsbnlvbldibvfjhsdbvjbsubfkjbgjhrlugyseliugrgvgyugdflvyb")
    const userID = 27;
    let result = await pool.query('SELECT * FROM users where id_user = $1', [userID]);
    console.log(result.rows);
    return result.rows;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


const updateUser = async (userId, username, email, password,country,city,phonenumber) => {
  const updateUserQuery = `
    UPDATE users
    SET username = $1, email = $2, password = $3,country = $4,city = $5 ,phonenumber = $6
    WHERE user_id = $7
    RETURNING *
  `;
  const values = [username, email, password, userId,country,city,phonenumber];

  try {
    const updatedUser = await pool.query(updateUserQuery, values);
    return updatedUser.rows[0];
  } catch (error) {
    throw new Error('Error updating user profile');
  }
};
module.exports = {
    updateUser,
    getAllUsers
  };
  