const User = require('../resources/users/user.model');

let users = [new User({ id: 'user1' }), new User()];

const getAllUsers = async () => users;
const getUser = async (id) => users.find((user) => user.id === id);
const createUser = async (user) => {
  users.push(user);
  return getUser(user.id);
};
const removeUser = async (id) => {
  users = users.filter((user) => user.id !== id);
  tasks = tasks.map((task) =>
    task.userId === id ? { ...task, userId: null } : task
  );
};
const updateUser = async (user) => {
  removeUser(user.id);
  createUser(user);
  return getUser(user.id);
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  removeUser,
  updateUser
};
