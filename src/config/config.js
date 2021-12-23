module.exports = {
    port: process.env.PORT || 5001,
    url: process.env.URL || "http://localhost",
    dbURI: process.env.MONGODB_CLOUD_URI || 'mongodb://localhost/ManageBlue',
    taskApiURI: process.env.TASK_API || 'http://localhost:5000/api/v1/tasks',
    gRPC_MS_URL: process.env.gRPC_MS_URL || 'localhost',
    gRPC_MS_PORT: process.env.gRPC_MS_PORT || '5005',
    secret: process.env.JWT_SECRET || "local development secret"
};