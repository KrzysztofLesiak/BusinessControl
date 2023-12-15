
from django.db import models
from django.core.validators import RegexValidator


class Employee(models.Model):

    class Meta:
        ordering = ("pk", "first_name", "last_name", "created")

    STATUS_CHOICECS = {
        "HI": "Hired",
        "HO": "Holidays",
        "FI": "Fired"
    }

    first_name = models.CharField(max_length=64)
    last_name = models.CharField(max_length=64)
    birth_date = models.DateField(auto_now_add=True)
    street = models.CharField(max_length=120)
    city = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=6, validators=[
                                   RegexValidator(r'^[0-9]{2}-{0,1}[0-9]{3}$')])
    phone_number = models.CharField(max_length=11, validators=[
                                    RegexValidator(r'^[0-9]{3}-{0,1}[0-9]{3}-{0,1}[0-9]{3}$')])
    status = models.CharField(max_length=2, choices=STATUS_CHOICECS)
    salary = models.DecimalField(max_digits=8, decimal_places=2)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if '-' not in self.postal_code:
            self.postal_code = '{0}-{1}'.format(
                self.postal_code[:2], self.postal_code[2:])
        if '-' not in self.phone_number:
            self.phone_number = '{0}-{1}-{2}'.format(
                self.phone_number[:3], self.phone_number[3:6], self.phone_number[6:])

        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.pk}_{self.first_name}_{self.last_name}_{self.birth_date}"
