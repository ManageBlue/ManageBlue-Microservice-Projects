const router = require("express").Router();
//const authJWT = require("../middlewares/authJWT");
const projectsController = require("../controllers/projects");


module.exports = projectsRouter => {

    projectsRouter.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });


    // gRPC demo
    router.post("/gRPC", projectsController.gRPC);

    // Return project by ID
    router.get("/:id", projectsController.returnByID);

    // Return project by ID - filter by query parameters
    router.get("/", /*[authJWT.verifyTokenWhitelist],*/ projectsController.return);

    // Create project
    router.post("/", /*[authJWT.verifyTokenWhitelist],*/ projectsController.create);

    // Update project by ID
    router.put("/:id", /*[authJWT.verifyTokenWhitelist],*/ projectsController.update);

    // Delete project by ID
    router.delete("/:id", /*[authJWT.verifyTokenWhitelist],*/ projectsController.delete);

    // Delete project by ID error
    router.delete("/deleteError/:id", /*[authJWT.verifyTokenWhitelist],*/ projectsController.deleteError);

    projectsRouter.use('/projects/api/v1', router);
};
