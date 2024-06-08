# Generated by Django 5.0 on 2024-05-02 06:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vendor', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='books',
            name='AuthorID',
            field=models.IntegerField(default='NA'),
        ),
        migrations.AlterField(
            model_name='books',
            name='CategoryID',
            field=models.IntegerField(default='NA'),
        ),
        migrations.AlterField(
            model_name='books',
            name='ISBN',
            field=models.CharField(default='NA', max_length=20),
        ),
    ]