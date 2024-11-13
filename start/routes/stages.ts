import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get("/stages", "StagesController.find");
    Route.get("/stages/:id", "StagesController.find");
    Route.post("/stages", "StagesController.create");
    Route.put("/stages/:id", "StagesController.update");
    Route.delete("/stages/:id", "StagesController.delete");
})// .middleware(['security'])
