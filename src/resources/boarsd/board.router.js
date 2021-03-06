const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/').post(async (req, res) => {
  const boardData = req.body;
  const newBoard = await boardsService.create(boardData);
  res.status(201).json(newBoard);
});

router.route('/:boardId').put(async (req, res) => {
  const { boardId } = req.params;
  const boardData = { ...req.body, id: boardId };
  const updatedBoard = await boardsService.update(boardData);
  res.json(updatedBoard);
});

router.route('/:id').get(async (req, res) => {
  const { id } = req.params;
  const board = await boardsService.get(id);
  if (board) res.json(board);
  else res.send(404);
});

router.route('/:boardId').delete((req, res) => {
  const { boardId } = req.params;
  boardsService.remove(boardId);
  res.sendStatus(204);
});

module.exports = router;
