module.exports = {
  friendlyName: 'Clear completed',

  description: 'Clears completed Todos',

  inputs: {},

  exits: {},

  fn: async function () {
    await Todo.destroy({ completed: true })
    return sails.inertia.location()
  },
}
