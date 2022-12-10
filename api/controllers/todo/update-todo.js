module.exports = {
  friendlyName: 'Update todo',

  description: '',

  inputs: {
    id: {
      type: 'number',
      required: true,
    },
  },

  exits: {
    success: {},
    todoNotFound: {
      statusCode: 404,
      responseType: 'redirect',
    },
  },

  fn: async function ({ id }) {
    const todoToUpdate = await Todo.findOne(id)
    if (!todoToUpdate) throw todoNotFound
    await Todo.updateOne(todoToUpdate.id).set({
      completed: !todoToUpdate.completed,
    })
    return sails.inertia.location()
  },
}
