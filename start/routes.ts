/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

import "./routes/products"
import "./routes/lots"
import "./routes/categories"
import "./routes/productcategory"
import "./routes/clients"
import "./routes/companies"
import "./routes/natural_people"
import "./routes/contracts"
import "./routes/vehicles"
import "./routes/drivers"
import "./routes/shifts"
import "./routes/payments"
import "./routes/receipts"
import "./routes/routes"
import "./routes/departments"
import "./routes/municipalities"
import "./routes/addresses"
import "./routes/stages"
import "./routes/distribution_centers"
import "./routes/users"
import "./routes/dishes"
import "./routes/restaurant_dishes"
import "./routes/restaurants"
import "./routes/administrators"
import "./routes/expenses"
import "./routes/services"
import "./routes/hotels"
import "./routes/insurances"
import "./routes/owners"
import "./routes/vehicle_owners"
import "./routes/vehicle_drivers"
import "./routes/operations"
import "./routes/chats"
import "./routes/messages"
