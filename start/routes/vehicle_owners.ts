import Route from "@ioc:Adonis/Core/Route";
Route.group(() => {
    Route.get("/vehicle_owners", "VehicleOwnersController.find");
    Route.get("/vehicle_owners/:id", "VehicleOwnersController.find");
    Route.post("/vehicle_owners", "VehicleOwnersController.create");
    Route.put("/vehicle_owners/:id", "VehicleOwnersController.update");
    Route.delete("/vehicle_owners/:id", "VehicleOwnersController.delete");
})// .middleware(['security'])