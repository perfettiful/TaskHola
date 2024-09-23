import uuid
from django.db import models

class Task(models.Model):
    task_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    task_description = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    completed = models.BooleanField(default=False)
    deleted = models.BooleanField(default=False)

    class Meta:
        db_table = 'tasks' 

    def __str__(self):
        return f"{self.task_description} (Completed: {self.completed}, Deleted: {self.deleted})"