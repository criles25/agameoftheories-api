exports.up = function(knex, Promise) {
  return knex.raw(`
    create schema auth;
    grant usage on schema auth to web_anon, agot_user;

    create or replace function auth.check_token() returns void
      language plpgsql
      as $$
    begin
      if current_setting('request.jwt.claim.count', true) IS NOT NULL then
        if current_setting('request.jwt.claim.count', true)::int !=
           (select token_count
           from auth.users
           where username_lowercase = current_user) then
             raise invalid_password using hint = 'Count invalid';
        end if;
      end if;
    end
    $$;

    CREATE TABLE auth.users (
      id serial PRIMARY KEY,
      username varchar(20) NOT NULL UNIQUE,
      username_lowercase varchar(20) NOT NULL UNIQUE,
      email text UNIQUE,
      password text NOT NULL,
      token_count integer NOT NULL DEFAULT 0
    );
    GRANT SELECT (username_lowercase, token_count) ON auth.users TO web_anon;
  `);
};

exports.down = function(knex, Promise) {
  return knex.raw(`
    REVOKE SELECT on auth.users FROM web_anon;
    DROP TABLE auth.users CASCADE;
    DROP FUNCTION auth.check_token();
    REVOKE USAGE on schema auth from web_anon, agot_user;
    DROP SCHEMA auth CASCADE;
  `);
};

// create or replace function auth.check_token() returns void
//   language plpgsql
//   as $$
// begin
// if current_setting('request.jwt.claim.count', true) != NULL then
//   if current_setting('request.jwt.claim.count', true)::int !=
//      (select token_count
//      from api.users
//      where username_lowercase = current_setting('request.jwt.claim.aud', true)) then
//        raise insufficient_privilege using hint = 'Invalid token';
//   end if;
// end if;
// end
// $$;

// create schema auth;
// grant usage on schema auth to web_anon, agot_user;
//
// create or replace function auth.check_token() returns void
//   language plpgsql
//   as $$
// begin
//   if current_setting('request.jwt.claim.count', true) IS NOT NULL AND current_setting('request.jwt.claim.count', true)::int !=
//      (select token_count
//      from api.users
//      where username_lowercase = current_setting('request.jwt.claim.aud', true)) then
//        raise insufficient_privilege using hint = 'Invalid token';
//   end if;
// end
// $$;
