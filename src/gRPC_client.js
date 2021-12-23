const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const PROTO_PATH = "./models/deadlines.proto";
const config = require("./config/config")

// demonstration of gRPC client call
const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const packageDefinition = protoLoader.loadSync(PROTO_PATH, options);

const DeadlineService = grpc.loadPackageDefinition(packageDefinition).DeadlineService;

const grpc_client = new DeadlineService(
    `${config.gRPC_MS_URL}:${config.gRPC_MS_PORT}`,
    grpc.credentials.createInsecure()
);

module.exports = grpc_client

/*client.getAllDeadlines({}, (error, deadlines) => {
    if (error) throw error
    else console.log(deadlines);
});*/