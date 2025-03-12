test("GET  to api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.update_at).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(parsedUpdatedAt);

  const maxConnections = responseBody.dependencies.database.max_connections;
  const openedConnections =
    responseBody.dependencies.database.opened_connections;
  const version = responseBody.dependencies.database.version;

  expect(maxConnections).toBeDefined;
  expect(openedConnections).toBeDefined;
  expect(version).toBeDefined;
  expect(maxConnections).toEqual(100);
  expect(version).toEqual("16.0");
  expect(openedConnections).toEqual(1);
  expect(maxConnections > openedConnections).toBe(true);
});
