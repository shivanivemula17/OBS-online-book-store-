from django.contrib import admin
from vendor.models import books, orders 
# Register your models here.
admin.site.register(books)
admin.site.register(orders)