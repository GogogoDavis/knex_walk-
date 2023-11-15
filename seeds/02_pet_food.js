/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE pet_food CASCADE')
  await knex('pet_food').del()
  await knex('pet_food').insert([
    {id: 1, name: 'Blue Buffalo'},
    {id: 2, name: 'Purina'},
    {id: 3, name: 'Country Companion'}
  ]);
};
