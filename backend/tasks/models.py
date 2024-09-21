from django.db import models
import uuid

class Task(models.Model):
    task_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    task_description = models.CharField(max_length=255)
    user_email = models.EmailField(max_length=255)

    class Meta:
        db_table = 'tasks' 

    def __str__(self):
        return f"{self.task_description} ({self.user_email})"
