# Generated by Django 5.0 on 2024-01-18 22:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0002_alter_employee_options_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='employee',
            options={'ordering': ('pk', 'first_name', 'last_name', 'created')},
        ),
        migrations.RenameField(
            model_name='employee',
            old_name='birthDate',
            new_name='birth_date',
        ),
        migrations.RenameField(
            model_name='employee',
            old_name='firstName',
            new_name='first_name',
        ),
        migrations.RenameField(
            model_name='employee',
            old_name='lastName',
            new_name='last_name',
        ),
        migrations.RenameField(
            model_name='employee',
            old_name='phoneNumber',
            new_name='phone_number',
        ),
        migrations.RenameField(
            model_name='employee',
            old_name='postalCode',
            new_name='postal_code',
        ),
    ]