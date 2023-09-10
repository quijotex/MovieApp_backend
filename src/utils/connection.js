const { Sequelize } = require('sequelize');


let sequelize;
if (process.env.node_env === "production") {
  Sequelize = new sequelize(process.env.database_url);
} else {
  Sequelize= new sequelize(
    process.env.postgres_db || "elitypescript",
    process.env.postgres_user || "eli",
    "",
    {
      host: process.env.psql_host || "localhost",
      dialect: "postgres",
      pool: {
        max: 100,
        min: 0,
        idle: 200000,
        // @note https://github.com/sequelize/sequelize/issues/8133#issuecomment-359993057
        acquire: 1000000,
      },
    }
  );
}

module.exports = sequelize;