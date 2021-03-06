exports.up = function(knex, Promise) {
  return knex.schema.createTable('teams', function(t){
    t.increments().primary();
    t.string('name');
    t.integer('user1_id').references('id').inTable('users');
    t.integer('user2_id').references('id').inTable('users');
    t.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('teams');
};
