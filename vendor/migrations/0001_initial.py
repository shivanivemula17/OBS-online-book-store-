# Generated by Django 5.0 on 2024-04-20 04:18

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('customer', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='books',
            fields=[
                ('Image', models.ImageField(upload_to='static/images')),
                ('BookID', models.AutoField(primary_key=True, serialize=False)),
                ('CategoryName', models.CharField(max_length=100)),
                ('CategoryID', models.IntegerField()),
                ('BookTitle', models.CharField(max_length=100)),
                ('AuthorName', models.CharField(max_length=100)),
                ('AuthorID', models.IntegerField()),
                ('ISBN', models.CharField(max_length=20)),
                ('UnitPrice', models.DecimalField(decimal_places=2, max_digits=10)),
                ('QuantityAvailable', models.IntegerField()),
                ('BindingType', models.CharField(choices=[('PAPERBACK', 'paperback'), ('HARDCOVER', 'hardcover')], default='PAPERBACK', max_length=20)),
                ('SoldBy', models.CharField(max_length=100)),
                ('vendorID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='customer.users')),
            ],
        ),
        migrations.CreateModel(
            name='orders',
            fields=[
                ('OrderID', models.AutoField(primary_key=True, serialize=False)),
                ('SoldBy', models.CharField(max_length=100)),
                ('SoldTo', models.CharField(max_length=100)),
                ('BookName', models.CharField(max_length=100)),
                ('Quantity', models.IntegerField(default=1)),
                ('UnitPrice', models.DecimalField(decimal_places=2, max_digits=10)),
                ('TotalAmount', models.DecimalField(decimal_places=2, max_digits=10)),
                ('OrderDate', models.DateField()),
                ('DeliveryDate', models.DateField()),
                ('OrderStatus', models.CharField(choices=[('PENDING', 'pending'), ('SHIPPING', 'shipping'), ('DELIVERED', 'delivered')], default='PENDING', max_length=10)),
                ('PaymentStatus', models.CharField(choices=[('PAID', 'paid'), ('PENDING', 'pending')], default='PENDING', max_length=10)),
                ('Mobile_No', models.IntegerField(unique=True)),
                ('Address', models.CharField(max_length=100)),
                ('ZipCode', models.IntegerField()),
                ('BookID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vendor.books')),
                ('UserID', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='customer.users')),
            ],
        ),
    ]
