module.exports = {
  friendlyName: 'Create todo',

  description: '',

  inputs: {
    name: {
      type: 'string',
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 201,
      responseType: 'redirect',
    },
  },

  fn: async function ({ name }) {
    await Todo.create({ name })
    return 'back'
  },
}
