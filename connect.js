module.exports = {
  name: "connect",
  ns: "socket.io-client",
  description: "Creates an io socket client object",
  phrases: {
    active: "Creating socket io client"
  },
  ports: {
    input: {
      url: {
        type: "string",
        format: "uri",
        title: "Url",
        description: "The URL to listen on.",
        required: true
      }
    },
    output: {
      socket: {
        type: "function",
        title: "io socket client object"
      }
    }
  },
  dependencies: {
    npm: {
      "socket.io-client": "##socket.io-client##"
    }
  },
  fn: function connect(input, $, output, state, done, cb, on, socket_io_client) {
    var r = function() {
      output = {
        socket: $.create(socket_io_client.connect($.url))
      }
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}