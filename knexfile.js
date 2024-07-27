
module.exports =  {
    client: 'postgresql',
    connection: {
      host:'localhost',
      database: 'postgres',
      user:     'postgres',
      password: '10012304'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
