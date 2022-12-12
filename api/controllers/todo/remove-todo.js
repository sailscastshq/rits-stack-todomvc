module.exports = {
  friendlyName: 'Remove todo',

  description: '',

  inputs: {
    id: {
      type: 'number',
      required: true,
    },
  },

  exits: {},

  fn: async function ({ id }) {
    await Todo.destroyOne(id)
    return sails.inertia.location()
  },
}
