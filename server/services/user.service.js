const User = require("../models/user.model");
const AppError = require("../error/app.error");

class UserService {
  static async registerUser(data) {
    const { firstName, lastName, email, dob } = data;
    try {
      const user = await User.create({ firstName, lastName, email, dob });
      return user;
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }
  static async getAllUsers() {
    try {
      const users = await User.find();
      return users;
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }

  static async updateUser(id, data) {
    if(!data){
      throw new AppError("Invalid data", 400);
    }
    
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new AppError("User not found", 404);
      }
      const allowedFields = ["firstName", "lastName", "email", "dob"];
      const updateKeys = Object.keys(data);
      const isValidOperation = updateKeys.every((update) =>
        allowedFields.includes(update)
      );
      if (!isValidOperation) {
        throw new AppError("Invalid updates", 400);
      }
      updateKeys.forEach((update) => {
        if (update === "dob") {
          user[update] = new Date(data[update]); // Convert string to Date
        } else {
          user[update] = data[update];
        }
      });
      return await user.save();
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }

  static async deleteUser(id) {
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new AppError("User not found", 404);
      }
      return await user.deleteOne();
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }
}

module.exports = UserService;
