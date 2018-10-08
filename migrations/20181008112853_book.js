exports.up = function (knex, Promise) {
  return knex.schema.createTable('book', (table) => {
    table.increments();
    table.text('title').notNullable();
    table.text('genre').notNullable();
    table.text('description')
    table.text('cover')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('book');
};