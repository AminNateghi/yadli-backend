module.exports = {
  type: `postgres`,
  url: `${process.env.DATABASE_URL}`,
  entities: ["**/*.entity.ts"],
  migrations: ["src/migration/*.ts"],
  cli: { migrationsDir: "src/migration" },
  extra: {
    ssl: { rejectUnauthorized: false }
  }
};