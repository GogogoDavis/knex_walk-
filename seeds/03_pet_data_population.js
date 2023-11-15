/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {id: 1, name: 'BiggySmall', pet_type_id: 4},
    {id: 2, name: 'Tobias', pet_type_id: 2 },
    {id: 3, name: 'Thruppy', pet_type_id: 1}
  ]);
};
