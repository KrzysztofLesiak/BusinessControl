from rest_framework import serializers

from .models import Employee


class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Employee
        fields = ['id', 'first_name', 'last_name', 'birth_date', 'street',
                  'city', 'postal_code', 'phone_number', 'position', 'status', 'salary']
