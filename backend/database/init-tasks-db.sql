DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  task_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  task_description VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL
);

INSERT INTO tasks (task_description, user_email) VALUES
('Signup for TaskHola ✅', 'joe.schmo@go.co'),
('Plan a weekend getaway 🏖️', 'jane.doe@example.com'),
('Learn to juggle 🤹', 'circus.fan@example.com'),
('Bake a rainbow cake 🌈🍰', 'sweet.tooth@example.com'),
('Start a herb garden 🌿', 'green.thumb@example.com'),
('Write a short story 📝', 'aspiring.author@example.com'),
('Learn a magic trick 🎩✨', 'wannabe.magician@example.com'),
('Host a game night 🎲🃏', 'party.planner@example.com'),
('Try a new cuisine 🍜', 'foodie.explorer@example.com'),
('Take a dance class 💃', 'rhythm.enthusiast@example.com'),
('Build a birdhouse 🐦🏠', 'nature.lover@example.com'),
('Learn to play ukulele 🎸', 'music.newbie@example.com');