from django.shortcuts import render
from rest_framework import generics
from .models import Task
from .serializers import TaskSerializer

class TaskList(generics.ListCreateAPIView):
    serializer_class = TaskSerializer

    def get_queryset(self):
        queryset = Task.objects.all()
        for field in Task._meta.fields:
            field_name = field.name
            if field_name in self.request.query_params:
                filter_value = self.request.query_params[field_name]
                queryset = queryset.filter(**{field_name: filter_value})
        return queryset

class TaskUpdate(generics.UpdateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    lookup_field = 'task_id'

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', True)
        return super().update(request, partial=partial, *args, **kwargs)