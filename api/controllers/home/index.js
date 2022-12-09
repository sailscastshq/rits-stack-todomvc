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
      { createdAt: 'DESC' },
      { completed: 'DESC' },
    ])
    return sails.inertia.render('index', { todos })
  },
}
