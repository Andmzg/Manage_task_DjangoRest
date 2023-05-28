from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task


class Taskview(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

