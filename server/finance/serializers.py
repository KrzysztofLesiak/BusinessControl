from rest_framework import serializers
from .models import Transactions, TransactionCategory, TRANSACTION_TYPE_CHOICES


class TransactionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transactions
        fields = "__all__"
