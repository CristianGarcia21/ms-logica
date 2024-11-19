import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get("/user", "UserController.find");
    Route.get("/user/:id", "UserController.find");
    Route.post("/user", "UserController.create");
    Route.put("/user/:id", "UserController.update");
    Route.delete("/user/:id", "UserController.delete");
})// .middleware(['security'])
