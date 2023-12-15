from django.urls import path, include
from rest_framework import routers

from . import views


router = routers.DefaultRouter()
router.register(r'employees', views.EmployeeViewSet)

urlpatterns = [
    path("routes", views.getRoutes, name="routes"),
    path("", include(router.urls))

]
