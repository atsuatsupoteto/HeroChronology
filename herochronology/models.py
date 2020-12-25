from django.conf import settings
from django.db import models
from django.utils import timezone
# Create your models here.

class Hero_category(models.Model):
    category_name = models.CharField(max_length=30)

class Hero_info(models.Model):
    start_year = models.DateField()
    category = models.ForeignKey(Hero_category, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    create_date = models.DateTimeField(default=timezone.now)