const User = require('../resources/users/user.model');
const Board = require('../resources/boarsd/board.model');
const Task = require('../resources/tasks/task.model');

let users = [new User({ id: 'user1' }), new User()];

let boards = [
  new Board({
    id: 'board1',
    columns: [{ id: 'column1', title: 'column', order: 1 }],
  })
];

const getAllUsers = async () => users;
const getUser = async (id) => users.find((user) => user.id === id);
const createUser = async (user) => {
  users.push(user);
  return getUser(user.id);
};

const removeUser = async (id) => {
  users = users.filter((user) => user.id !== id);
};

const updateUser = async (user) => {
  removeUser(user.id);
  createUser(user);
  return getUser(user.id);
};

const getAllBoards = async () => boards;
const getBoard = async (id) => boards.find((board) => board.id === id);
const createBoard = async (board) => {
  boards.push(board);
  return getBoard(board.id);
};

const removeBoard = async (id) => {
  boards = boards.filter((board) => board.id !== id);
};

const updateBoard = async (board) => {
  removeBoard(board.id);
  createBoard(board);
  return getBoard(board.id);
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  removeUser,
  updateUser,
  getAllBoards,
  getBoard,
  createBoard,
  removeBoard,
  updateBoard,
};
