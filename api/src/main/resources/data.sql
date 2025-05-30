/*INSERT INTO contacts (id, first_name, last_name, email, telephone) VALUES
(1, 'Riccardo', 'Smerilli', 'ricsme@gmail.com', '12345678'),
(2, 'Giovanni', 'Fantozzi', 'giofant@gmail.com', '12345678'),
(3, 'Pippo', 'Inzaghi', 'pipinza@gmail.com', '12345678'),
(4, 'Papa', 'Francesco', 'papfra@gmail.com', '12345678'),
(5, 'Luigi', 'Marini', 'luimari@gmail.com', '12345678');


ALTER TABLE contacts ALTER COLUMN ID RESTART WITH (SELECT MAX(ID) FROM contacts) + 1;*/