import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get("/distribution_centers", "DistributionCentersController.find");
    Route.get("/distribution_centers/:id", "DistributionCentersController.find");
    Route.post("/distribution_centers", "DistributionCentersController.create");
    Route.put("/distribution_centers/:id", "DistributionCentersController.update");
    Route.delete("/distribution_centers/:id", "DistributionCentersController.delete");
})// .middleware(['security'])
