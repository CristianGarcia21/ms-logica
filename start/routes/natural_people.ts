import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get("/natural_people", "NaturalPeopleController.find");
    Route.get("/natural_people/:id", "NaturalPeopleController.find");
    Route.post("/natural_people", "NaturalPeopleController.create");
    Route.put("/natural_people/:id", "NaturalPeopleController.update");
    Route.delete("/natural_people/:id", "NaturalPeopleController.delete");
})// .middleware(['security'])
