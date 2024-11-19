import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get("/receipts", "ReceiptsController.find");
    Route.get("/receipts/:id", "ReceiptsController.find");
    Route.post("/receipts", "ReceiptsController.create");
    Route.put("/receipts/:id", "ReceiptsController.update");
    Route.delete("/receipts/:id", "ReceiptsController.delete");
})// .middleware(['security'])
