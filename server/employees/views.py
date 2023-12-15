
from rest_framework.response import Response
from rest_framework.decorators import api_view


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
        },
    ]

    return Response(routes)
