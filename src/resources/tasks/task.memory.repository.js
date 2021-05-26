const dB = require('../../common/inMemoryDb');

const getAll = async () => dB.getAllTasks();

module.exports = { getAll };
