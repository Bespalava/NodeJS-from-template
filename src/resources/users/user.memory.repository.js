const dB = require('../../common/inMemoryDb');

const getAll = async () => dB.getAllUsers();

const get = async(id) => {
    const user = await dB.getUser(id);
     if (!user) {
       throw new Error(`User id: ${id} not found`)
     }
     return user;
   }; 

const create = async (user) => dB.createUser(user);

const remove = async (id) => dB.removeUser(id);

const update = async (id, user) => {
    const entity = await dB.update(id, user);
    if (!entity) {
      throw new Error(`User id: ${id} not found`);
    }
    return entity;
  }

module.exports = { getAll, get, create, update, remove };
