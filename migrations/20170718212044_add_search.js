
exports.up = function(knex, Promise) {
  return knex.raw(`
    CREATE FUNCTION search(api.theories) RETURNS text AS $$
      SELECT $1.name || ' ' || COALESCE($1.description, '');
    $$ LANGUAGE SQL;
  `).then(() => {
    return knex.raw(`
      CREATE INDEX theories_search_idx
      ON api.theories
      USING GIN (to_tsvector('english', search(theories)));
    `)
  })
};

exports.down = function(knex, Promise) {
  return knex.raw(`DROP INDEX api.theories_search_idx;`).then(() => {
    return knex.raw(`DROP FUNCTION search(api.theories);`)
  })
};
