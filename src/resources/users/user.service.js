const usersRepo = require('./user.memory.repository');
const User = require('./user.model');

const getAll = () => usersRepo.getAll();

const get = id => usersRepo.get(id);

const create = user => usersRepo.create(user);

const update = (userData) => {
  const { name, login, password, id } = userData;
  const user = new User({ name, login, password, id });
  const updatedUser = usersRepo.update(user);
  return User.toResponse(updatedUser);
};

const remove = (id) => usersRepo.remove(id);

module.exports = { getAll, get, create, update, remove };
