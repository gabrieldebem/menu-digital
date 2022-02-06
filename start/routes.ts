import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  // Users
  Route.group(()=> {
    Route.get('/', 'UserController.index');
    Route.get('/:id', 'UserController.show');
    Route.post('/', 'UserController.store');
    Route.put('/:id', 'UserController.update');
    Route.delete('/:id', 'UserController.destroy');
  }).prefix('/users')

  // Products
  Route.group(() => {
    Route.get('/', 'ProductController.index');
    Route.get('/:id', 'ProductController.show');
    Route.post('/', 'ProductController.store');
    Route.put('/:id', 'ProductController.update');
    Route.delete('/:id', 'ProductController.destroy');
  }).prefix('/products');

  // Establishments
  Route.group(() => {
    Route.get('/', 'EstablishmentController.index');
    Route.get('/:id', 'EstablishmentController.show');
    Route.post('/', 'EstablishmentController.store');
    Route.put('/:id', 'EstablishmentController.update');
    Route.delete('/:id', 'EstablishmentController.destroy');
  }).prefix('/establishments');

}).prefix('/api');
