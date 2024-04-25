from rest_framework import viewsets
from .models import Transactions
from .serializers import TransactionsSerializer
from rest_framework.permissions import IsAuthenticated


class FinanceViewSet(viewsets.ModelViewSet):
    queryset = Transactions.objects.all()
    serializer_class = TransactionsSerializer
    permission_classes = [IsAuthenticated]
