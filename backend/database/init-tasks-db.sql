DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks (
  task_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  task_description VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  completed BOOLEAN DEFAULT FALSE,
  deleted BOOLEAN DEFAULT FALSE
);

INSERT INTO tasks (task_description, completed, deleted) VALUES
('Complete project proposal', FALSE, FALSE),
('Review code changes', TRUE, FALSE),
('Update documentation', FALSE, TRUE),
('Prepare presentation slides', TRUE, FALSE),
('Fix reported bug', FALSE, FALSE),
('Conduct user testing', TRUE, FALSE),
('Optimize database queries', FALSE, FALSE),
('Write unit tests', FALSE, TRUE);
