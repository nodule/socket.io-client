module.exports = {
  name: "emit",
  ns: "socket.io-client",
  description: "Sends a message to the server",
  phrases: {
    active: "Sending message to server"
  },
  ports: {
    input: {
      socket: {
        type: "function",
        title: "io socket handle",
        description: "Expects an socket.io socket node.",
        readonly: true,
        required: true
      },
      message: {
        type: "any",
        title: "A message to send",
        required: true
      }
    },
    output: {}
  },
  fn: function emit(input, $, output, state, done, cb, on) {
    var r = function() {
      $.socket.emit($.message);
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}