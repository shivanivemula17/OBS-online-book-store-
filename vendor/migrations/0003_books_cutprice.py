# Generated by Django 5.0 on 2024-05-02 15:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vendor', '0002_alter_books_authorid_alter_books_categoryid_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='books',
            name='CutPrice',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
    ]