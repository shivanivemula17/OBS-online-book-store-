# Generated by Django 5.0 on 2024-04-26 16:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('customer', '0002_alter_users_address_alter_users_companylocation_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='contact',
            fields=[
                ('ContactID', models.AutoField(primary_key=True, serialize=False)),
                ('FullName', models.CharField(max_length=100)),
                ('Email', models.CharField(max_length=100)),
                ('Mobile_No', models.CharField(max_length=20)),
                ('Location', models.CharField(max_length=100)),
                ('Message', models.CharField(max_length=500)),
                ('UserID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='customer.users')),
            ],
        ),
    ]
