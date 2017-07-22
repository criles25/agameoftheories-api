
exports.up = function(knex, Promise) {
  return knex.raw("create role admin_user nologin;").then(() => {
    return knex.raw("grant admin_user to postgres;")
  }).then(() => {
    return knex.raw("grant usage on schema api to admin_user;")
  }).then(() => {
    return knex.raw("grant all on api.theories to admin_user;")
  }).then(() => {
    return knex.raw("grant usage, select on sequence api.theories_id_seq to admin_user;")
  });
};

exports.down = function(knex, Promise) {
  return knex.raw("revoke usage, select on sequence api.theories_id_seq from admin_user").then(() => {
    return knex.raw("revoke usage on schema api from admin_user")
  }).then(() => {
    return knex.raw("revoke all on api.theories from admin_user");
  }).then(() => {
    return knex.raw("drop role admin_user");
  });
};
