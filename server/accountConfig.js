ServiceConfiguration.configurations.upsert(
  { service: "google" },
  {
    $set: {
      clientId: "63571186166-l1rfura3pp5ja68fajgv4ugjc5hbufl4.apps.googleusercontent.com",
      loginStyle: "popup",
      secret: "9U6aESRqJCOa7vOy5AKN6TcU"
    }
  }
);

ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      appId: "730038490436205",
      loginStyle: "popup",
      secret: "ab6749c8b138f0263c73c01621a42d67"
    }
  }
);

ServiceConfiguration.configurations.upsert(
  { service: "twitter" },
  {
    $set: {
      consumerKey: "5V8YXYzdxJb9dexDnUbCkNrEi",
      loginStyle: "popup",
      secret: "4QmAX0cxw92d7bkUmts33CNemx852Nzvx4NS0YSrEw0etfF03a"
    }
  }
);
