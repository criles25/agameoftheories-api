
exports.up = function(knex, Promise) {
  return knex.raw("create role agot_user nologin;").then(() => {
    return knex.raw("grant agot_user to postgres;")
  }).then(() => {
    return knex.raw("grant usage on schema api to agot_user;")
  }).then(() => {
    return knex.raw("grant select, insert on api.theories to agot_user;")
  }).then(() => {
    return knex.raw("grant usage, select on sequence api.theories_id_seq to agot_user;")
  });
};

exports.down = function(knex, Promise) {
  return knex.raw("revoke usage, select on sequence api.theories_id_seq from agot_user").then(() => {
    return knex.raw("revoke usage on schema api from agot_user")
  }).then(() => {
    return knex.raw("revoke select, insert on api.theories from agot_user");
  }).then(() => {
    return knex.raw("drop role agot_user");
  });
};
