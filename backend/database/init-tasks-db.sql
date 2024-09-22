DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  task_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  task_description VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL
);

INSERT INTO tasks (task_description, user_email) VALUES
('Try a new recipe 🍳', 'foodie.adventurer@example.com'),
('Start a herb garden 🌿', 'green.thumb@example.com'),
('Write a short story 📝', 'aspiring.author@example.com'),
('Visit a new museum 🖼️', 'culture.vulture@example.com'),
('Learn to play ukulele 🎸', 'music.newbie@example.com'),
('Take a yoga class 🧘‍♀️', 'yoga.enthusiast@example.com');
