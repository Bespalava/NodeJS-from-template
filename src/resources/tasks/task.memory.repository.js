const dB = require('../../common/inMemoryDb');

const get = async (id) => {
    const task = dB.getTask(id);
  
    if (!task) {
      throw new Error(`The board: ${id} not found`);
    }
  
    return task;
  };

const create = async (task) => dB.createTask(board);

const remove = async (task) => dB.removeTask(task);

const update = async (task) => dB.updateTask(task);

module.exports = { getAll, get, create, update, remove };
