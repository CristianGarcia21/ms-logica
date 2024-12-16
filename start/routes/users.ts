import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get("/user", "UsersController.find");
    Route.get("/user/:userId", "UsersController.find");
    Route.post("/user", "UsersController.create");
    Route.put("/user/:userId", "UsersController.update");
    Route.delete("/user/:userId", "UsersController.delete");
    Route.get('/users/:userId', 'UsersController.findByUserId')
})// .middleware(['security'])
