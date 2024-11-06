import Route from '@ioc:Adonis/Core/Route'
Route.group(() => {
    Route.get("/productcategory", "ProductCategoriesController.find");
    Route.get("/productcategory/:id", "ProductCategoriesController.find");
    Route.post("/productcategory", "ProductCategoriesController.create");
    Route.put("/productcategory/:id", "ProductCategoriesController.update");
    Route.delete("/productcategory/:id", "ProductCategoriesController.delete");
})// .middleware(['security'])