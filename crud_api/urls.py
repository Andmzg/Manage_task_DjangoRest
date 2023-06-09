from django.contrib import admin
from django.urls import path, include
from task import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register (r'tasks', views.Taskview, 'task')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
