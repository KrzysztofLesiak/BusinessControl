from rest_framework import viewsets, filters
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.db.models import Sum

from .models import Transactions
from .serializers import TransactionsSerializer


class FinanceViewSet(viewsets.ModelViewSet):
    queryset = Transactions.objects.all()
    serializer_class = TransactionsSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    search_fields = ['name']
    ordering_fields = '__all__'

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(queryset)
        total_income = Transactions.objects.filter(
            type="IN").aggregate(sum=Sum('amount', default=0.0))['sum']
        total_expenses = Transactions.objects.filter(
            type="EX").aggregate(sum=Sum('amount', default=0.0))['sum']

        if page is not None:
            serializer = self.get_serializer(page, many=True)
            max_page = self.paginator.page.paginator.num_pages
        else:
            serializer = self.get_serializer(queryset, many=True)

        data = {
            'transactions': serializer.data,
            'count': Transactions.objects.all().count(),
            'total_income': total_income,
            'total_expenses': total_expenses,
            'total_amount': total_income - total_expenses,
            'max_page': max_page
        }

        return Response(data)
