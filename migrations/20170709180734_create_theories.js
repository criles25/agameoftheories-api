
exports.up = function(knex, Promise) {
  return knex.raw("CREATE SCHEMA api;").then(() => {
    return knex.raw("CREATE TYPE season_spoiler AS ENUM ('none', '1', '2', '3', '4', '5', '6', '7', '8');")
  }).then(() => {
    return knex.raw("CREATE TYPE asoiaf_book_spoiler AS ENUM ('none', 'agot', 'acok', 'asos', 'affc', 'adwd', 'twow', 'ados');")
  }).then(() => {
    return knex.raw("CREATE TYPE todae_story_spoiler AS ENUM ('none', 'thk', 'tss', 'tmk');")
  }).then(() => {
    return knex.raw("CREATE TYPE twoiaf_spoiler AS ENUM ('none', 'twoiaf');")
  }).then(() => {
    return knex.raw("CREATE TYPE tpatq_spoiler AS ENUM ('none', 'tpatq');")
  }).then(() => {
    return knex.raw("CREATE TYPE trp_spoiler AS ENUM ('none', 'trp');")
  }).then(() => {
    return knex.raw("CREATE TYPE status_type AS ENUM('true', 'false', 'possible', 'half-true');")
  }).then(() => {
    return knex.raw(`CREATE TABLE api.theories (
      id serial PRIMARY KEY,
      name varchar(255) NOT NULL UNIQUE,
      description text,
      status status_type NOT NULL DEFAULT 'possible',
      links varchar(255)[],
      created_at timestampz NOT NULL default current_timestamp,
      updated_at timestampz NOT NULL default current_timestamp,
      approved_at timestampz,
      got_spoilers_created season_spoiler NOT NULL DEFAULT 'none',
      got_spoilers_proven season_spoiler NOT NULL DEFAULT 'none',
      asoiaf_spoilers_created asoiaf_book_spoiler NOT NULL DEFAULT 'none',
      asoiaf_spoilers_proven asoiaf_book_spoiler NOT NULL DEFAULT 'none',
      todae_spoilers_created todae_story_spoiler NOT NULL DEFAULT 'none',
      todae_spoilers_proven todae_story_spoiler NOT NULL DEFAULT 'none',
      twoiaf_spoilers_created twoiaf_spoiler NOT NULL DEFAULT 'none',
      twoiaf_spoilers_proven twoiaf_spoiler NOT NULL DEFAULT 'none',
      tpatq_spoilers_created tpatq_spoiler NOT NULL DEFAULT 'none',
      tpatq_spoilers_proven tpatq_spoiler NOT NULL DEFAULT 'none',
      trp_spoilers_created trp_spoiler NOT NULL DEFAULT 'none',
      trp_spoilers_proven trp_spoiler NOT NULL DEFAULT 'none'
    );`)
  })
};

exports.down = function(knex, Promise) {
  return knex.raw("DROP SCHEMA api CASCADE;").then(() => {
    return knex.raw("DROP TYPE season_spoiler")
  }).then(() => {
    return knex.raw("DROP TYPE asoiaf_book_spoiler")
  }).then(() => {
    return knex.raw("DROP TYPE todae_story_spoiler")
  }).then(() => {
    return knex.raw("DROP TYPE twoiaf_spoiler")
  }).then(() => {
    return knex.raw("DROP TYPE tpatq_spoiler")
  }).then(() => {
    return knex.raw("DROP TYPE trp_spoiler")
  }).then(() => {
    return knex.raw("DROP TYPE status_type")
  });

};
