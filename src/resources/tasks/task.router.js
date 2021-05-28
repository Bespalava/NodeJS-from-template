const router = require('express').Router();
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks);
});

router.route('/:id').get(async (req, res) => {
    const { id } = req.params;
    const task = await tasksService.get(id);
    if (task) res.json(task);
    else res.send(404);
  });

router.route('/').post(async (req, res) => {
    const taskData = req.body;
    const newTask = await tasksService.create(taskData);
    res.status(201).json(newTask);
});

router.route('/:taskId').delete((req, res) => {
    const { taskId } = req.params;
    tasksService.remove(taskId);
    res.sendStatus(204);
});

router.route('/:taskId').put(async (req, res) => {
    const { taskId } = req.params;
    const taskData = { ...req.body, id: taskId };
    const updatedTask = await tasksService.update(taskData);
    res.json(updatedTask);
});

module.exports = router;
