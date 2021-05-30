const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const get = (id) => tasksRepo.get(id);

const save = (task) => tasksRepo.save(task);

const update = (id, task) => tasksRepo.update(id, task);

const remove = (id) => tasksRepo.remove(id);

module.exports = { getAll, get, save, update, remove };
