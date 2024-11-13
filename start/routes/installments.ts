import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get("/installments", "InstallmentsController.find");
    Route.get("/installments/:id", "InstallmentsController.find");
    Route.post("/installments", "InstallmentsController.create");
    Route.put("/installments/:id", "InstallmentsController.update");
    Route.delete("/installments/:id", "InstallmentsController.delete");
})// .middleware(['security'])