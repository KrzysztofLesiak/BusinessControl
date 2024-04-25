from django.db import models

TRANSACTION_TYPE_CHOICES = {
    "IN": "Income",
    "EX": "Expense"
}


class Transactions(models.Model):
    name = models.CharField(max_length=64)
    time = models.DateTimeField(auto_now_add=True)
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    currency = models.CharField(max_length=3)
    type = models.CharField(
        max_length=2, choices=TRANSACTION_TYPE_CHOICES)
    description = models.TextField(max_length=1024)
    category = models.ForeignKey(
        "TransactionCategory", on_delete=models.SET("other"))
    indetifier = models.CharField(max_length=64, null=True, blank=True)

    class Meta:
        ordering = ['time']


class TransactionCategory(models.Model):
    name = models.CharField(unique=True, max_length=64)
