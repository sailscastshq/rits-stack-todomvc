module.exports = {
  friendlyName: 'Home',

  description: 'Home index.',

  inputs: {
    completed: {
      type: 'boolean',
    },
  },

  exits: {},

  fn: async function ({ completed }) {
    const criteria = completed !== undefined ? { completed } : {}
    const todos = await Todo.find(criteria).sort([
      { completed: 'ASC' },
      { createdAt: 'DESC' },
    ])
    const undoneTodosCount = await Todo.count({ completed: false })
    return sails.inertia.render('index', { todos, undoneTodosCount })
  },
}
