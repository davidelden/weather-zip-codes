require('dotenv').config();

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: 'weather_zip_codes'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  },
  seeds: {
    directory: './seeds/dev'
  }
};
