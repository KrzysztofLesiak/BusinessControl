
from django.db import models
from django.core.validators import RegexValidator


class Employee(models.Model):

    class Meta:
        ordering = ("pk", "firstName", "lastName", "created")

    STATUS_CHOICECS = {
        "HI": "Hired",
        "HO": "Holidays",
        "FI": "Fired"
    }

    firstName = models.CharField(max_length=64)
    lastName = models.CharField(max_length=64)
    birthDate = models.DateField(auto_now_add=True)
    street = models.CharField(max_length=120)
    city = models.CharField(max_length=100)
    postalCode = models.CharField(max_length=6, validators=[
        RegexValidator(r'^[0-9]{2}-{0,1}[0-9]{3}$')])
    phoneNumber = models.CharField(max_length=11, validators=[
        RegexValidator(r'^[0-9]{3}-{0,1}[0-9]{3}-{0,1}[0-9]{3}$')])
    status = models.CharField(max_length=2, choices=STATUS_CHOICECS)
    salary = models.DecimalField(max_digits=8, decimal_places=2)
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if '-' not in self.postalCode:
            self.postalCode = '{0}-{1}'.format(
                self.postalCode[:2], self.postalCode[2:])
        if '-' not in self.phoneNumber:
            self.phoneNumber = '{0}-{1}-{2}'.format(
                self.phoneNumber[:3], self.phoneNumber[3:6], self.phoneNumber[6:])

        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.pk}_{self.firstName}_{self.lastName}_{self.birthDate}"
