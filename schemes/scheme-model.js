//bring in knex and connect it to the dev config

const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes')
}
function findById(id) {
    return db('schemes')
    .where({id})
    .first();
}
//Expects a scheme id.
//Resolves to an array of all correctly ordered step for the given scheme: [ { id: 17, scheme_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, scheme_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ].
//This array should include the scheme_name not the scheme_id.
function findSteps(id) {
    return db('steps') 
    .where({'steps.scheme_id': id})
    .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
    .join('schemes', 'schemes.id', 'steps.scheme_id')
}
// Expects a scheme object.
// Inserts scheme into the database.
// Resolves to the newly inserted scheme, including id.
function add(scheme) {
    return db('schemes')
    .insert(scheme, 'id')
    .then(scheme => {
        return scheme
    })
}
// Expects a changes object and an id.
// Updates the scheme with the given id.
// Resolves to the newly updated scheme object.
function update(changes, id) {
    return db('schemes')
    .update(changes)
    .where({id})
    .then(updated => updated ? findById(id) : null)
}
// Removes the scheme object with the provided id.
// Resolves to the removed scheme
// Resolves to null on an invalid id.
// (Hint: Only worry about removing the scheme. The database is configured to automatically remove all associated steps.)
function remove(id) {
    return db('schemes')
    .where({id})
    .del();
}