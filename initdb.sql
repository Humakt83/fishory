CREATE TABLE fish (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  name text NOT NULL unique,
  size int NOT NULL,
  minimum_aquarium_size int NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

insert into fish (name, size, minimum_aquarium_size) values ('Cardinal Tetra', 5, 63);
insert into fish (name, size, minimum_aquarium_size) values ('Guppy', 6, 45);
insert into fish (name, size, minimum_aquarium_size) values ('Bristlenose Catfish', 15, 128);
insert into fish (name, size, minimum_aquarium_size) values ('Discus', 20, 430);