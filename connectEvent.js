module.exports = {
  name: "connectEvent",
  ns: "socket.io-client",
  description: "Socket.io Client On Event",
  ports: {
    input: {
      socket: {
        type: "function",
        title: "io socket client handle",
        description: "Expects a io socket client node.",
        readonly: true,
        required: true
      },
      event: {
        type: "string",
        "enum": ["connect",
          "message",
          "reconnect",
          "error",
          "disconnect",
          "connecting",
          "connect_failed",
          "reconnect_failed",
          "reconnecting",
          "anything"
        ],
        title: "io socket client on events",
        description: "Select an on event and provide an output function to the out port.",
        required: true
      }
    },
    output: {
      out: {
        type: "any",
        title: "Output Object"
      }
    }
  },
  fn: function connectEvent(input, $, output, state, done, cb, on) {
    var r = function() {
      $.socket.connectEvent($.event, function connectEventCallback(out) {
        cb({
          out: out
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}