CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--  report
DROP TABLE IF EXISTS reports CASCADE;
CREATE TABLE IF NOT EXISTS reports(
  id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
  client_id INT NOT NULL,
  incident_desc VARCHAR(300) NOT NULL,
  city VARCHAR(150) NOT NULL,
  country VARCHAR(150) NOT NULL,
  time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

--  incidents
DROP TABLE IF EXISTS incidents CASCADE;
CREATE TABLE IF NOT EXISTS incidents(
  id uuid DEFAULT uuid_generate_v4() NOT NULL PRIMARY KEY,
  client_id INT NOT NULL,
  incident_desc VARCHAR(300) NOT NULL,
  city VARCHAR(150) NOT NULL,
  country VARCHAR(150) NOT NULL,
  weather_report jsonb NOT NULL,
  time_stamp TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
