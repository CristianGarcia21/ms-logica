import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get("/dishes", "DishesController.find");
    Route.get("/dishes/:id", "DishesController.find");
    Route.post("/dishes", "DishesController.create");
    Route.put("/dishes/:id", "DishesController.update");
    Route.delete("/dishes/:id", "DishesController.delete");
})// .middleware(['security'])
