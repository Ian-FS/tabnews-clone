import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();

  const maxConnectionsResult = await database.query("SHOW max_connections");
  const maxConnectionsValue = parseInt(
    maxConnectionsResult.rows[0].max_connections,
  );

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;

  const versionResult = await database.query("SHOW server_version");
  const versionValue = versionResult.rows[0].server_version;

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        max_connections: maxConnectionsValue,
        opened_connections: databaseOpenedConnectionsValue,
        version: versionValue,
      },
    },
  });
}

export default status;
