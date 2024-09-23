from django.shortcuts import render
from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer

class TaskList(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class TaskUpdate(generics.UpdateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    lookup_field = 'task_id'

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', True) 
        return super().update(request, partial=partial, *args, **kwargs)