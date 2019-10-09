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
function findSteps() {
    return null
}
function add() {
    return null
}
function update() {
    return null
}
function remove() {
    return null
}