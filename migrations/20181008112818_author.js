exports.up = function (knex, Promise) {
  return knex.schema.createTable('author', (table) => {
    table.increments();
    table.text('firstName').notNullable();
    table.text('lastName').notNullable();
    table.text('bio')
    table.text('portrait')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('author');
};