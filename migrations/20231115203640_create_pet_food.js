/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pet_food', table => {
        table.increments(); 
        table.string('name', 250); 
    });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('pet_food', table => {
        table.dropForeign('pet_food')
    })
};
