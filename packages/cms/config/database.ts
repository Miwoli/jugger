export default ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "jugger"),
      user: env("DATABASE_USERNAME", "user"),
      password: env("DATABASE_PASSWORD", "pass"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
