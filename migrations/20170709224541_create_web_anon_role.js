
exports.up = function(knex, Promise) {
  return knex.raw("create role web_anon nologin;").then(() => {
    return knex.raw("grant web_anon to postgres;")
  }).then(() => {
    return knex.raw("grant usage on schema api to web_anon;")
  }).then(() => {
    return knex.raw("grant select on api.theories to web_anon;")
  })
};

exports.down = function(knex, Promise) {
  return knex.raw("REVOKE USAGE ON schema api FROM web_anon").then(() => {
    return knex.raw("REVOKE SELECT ON api.theories FROM web_anon")
  }).then(() => {
    return knex.raw("DROP ROLE web_anon");
  });
};
