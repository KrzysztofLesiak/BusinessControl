
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import viewsets, filters
from django.db.models import Q
from rest_framework.permissions import IsAuthenticated

from .models import Employee
from .serializers import EmployeeSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['first_name', 'last_name']
    ordering_fields = '__all__'

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)

        if page is not None:
            serializer = self.get_serializer(page, many=True)
            max_page = self.paginator.page.paginator.num_pages
        else:
            serializer = self.get_serializer(queryset, many=True)

        data = {
            'employees': serializer.data,
            'length': Employee.objects.filter(
                Q(status="HI") | Q(status="HO")).all().count(),
            'max_page': max_page
        }
        return Response(data)


@api_view(["GET"])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/employees/',
            'method': 'GET',
            'body': None,
            'description': 'Returns array of employees'
        },
        {
            'Endpoint': '/employees/add',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Create new employee'
        },
        {
            'Endpoint': '/employees/:id',
            'method': 'GET',
            'body': None,
            'description': 'Returns single employee'
        },
        {
            'Endpoint': '/employees/:id',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Update employee'
        },
        {
            'Endpoint': '/employees/:id',
            'method': 'DELETE',
            'body': {'body': ""},
            'description': 'Delete employee'
        }
    ]

    return Response(routes)
