import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get("/restaurant_dishes", "RestaurantDishesController.find");
    Route.get("/restaurant_dishes/:id", "RestaurantDishesController.find");
    Route.post("/restaurant_dishes", "RestaurantDishesController.create");
    Route.put("/restaurant_dishes/:id", "RestaurantDishesController.update");
    Route.delete("/restaurant_dishes/:id", "RestaurantDishesController.delete");
})// .middleware(['security'])
