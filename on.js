module.exports = {
  name: "on",
  ns: "socket.io-client",
  description: "Acts upon the specified `on` event",
  phrases: {
    active: "Reacting on {input.event} event"
  },
  ports: {
    input: {
      socket: {
        type: "function",
        title: "io socket server handle",
        description: "Expects a io socket server node.",
        readonly: true,
        required: true
      },
      event: {
        type: "string",
        "enum": ["connect"],
        title: "On Event",
        description: "Reacts on the `on` event specified.",
        required: true
      }
    },
    output: {
      out: {
        type: "any",
        title: "Output"
      }
    }
  },
  fn: function on(input, $, output, state, done, cb, on) {
    var r = function() {
      $.io.sockets.on($.event, function onCallback(out) {
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