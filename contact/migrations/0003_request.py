# Generated by Django 5.0 on 2024-04-26 18:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0002_remove_contact_userid'),
    ]

    operations = [
        migrations.CreateModel(
            name='request',
            fields=[
                ('RequestID', models.AutoField(primary_key=True, serialize=False)),
                ('ISBN_No', models.CharField(max_length=100)),
                ('BookTitle', models.CharField(max_length=100)),
                ('AuthorName', models.CharField(max_length=100)),
                ('Quantity', models.IntegerField()),
                ('EmailID', models.CharField(max_length=100)),
                ('Mobile_No', models.CharField(max_length=20)),
            ],
        ),
    ]