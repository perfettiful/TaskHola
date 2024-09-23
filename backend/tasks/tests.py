from rest_framework.test import APIClient
from django.test import TestCase
from .models import Task

class TaskUpdateTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.task = Task.objects.create(task_description="Test Task")

    def test_update_task(self):
        url = f'/api/tasks/{self.task.task_id}/'
        data = {'task_description': 'Updated Task', 'completed': True}
        response = self.client.patch(url, data)
        self.assertEqual(response.status_code, 200)
        self.task.refresh_from_db()
        self.assertEqual(self.task.task_description, 'Updated Task')
        self.assertTrue(self.task.completed)