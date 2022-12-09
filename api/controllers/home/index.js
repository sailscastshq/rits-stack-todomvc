module.exports = {
  friendlyName: 'Home',

  description: 'Home index.',

  inputs: {},

  exits: {},

  fn: async function () {
    const todos = [{ name: 'Learn Sails', completed: false }]
    return sails.inertia.render('index', { todos })
  },
}
