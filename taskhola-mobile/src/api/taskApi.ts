import { API_BASE_URL } from './config';

export const fetchTasks = async () => {
  const response = await fetch(`${API_BASE_URL}/api/tasks/?format=json`);

  if (!response.ok) {
    console.log('Response:', response.status);
    throw new Error('Failed to fetch tasks');
  }
  return response.json();
};

export const removeTask = async (taskId: string) => {
  const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ deleted: true }),
  });


  if (!response.ok) {
    console.log('Response:', response.status);
    throw new Error('Failed to remove task');
  }
  return response.json();
};

export const completeTask = async (taskId: string) => {
  const response = await fetch(`${API_BASE_URL}/api/tasks/${taskId}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ completed: true }),
  });

  if (response.status < 200 || response.status >= 300) {
    console.log('Response:', response);
    throw new Error(`Failed to add task. Status: ${response.status}`);
  }

  return response.json();
};

export const createTask = async (taskDescription: string) => {

  console.log('Creating task:', taskDescription);
  const response = await fetch(`${API_BASE_URL}/api/tasks/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ task_description: taskDescription }),
  });

  if (!response.ok) {
    console.log('Response:', response);
    throw new Error('Failed to create task');
  }

  return response.json();
};