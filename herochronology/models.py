from django.conf import settings
from django.db import models
from django.utils import timezone
# Create your models here.

class Post(models.Model):
    start_year = models.DateTimeField()
    category = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField()
    create_date = models.DateTimeField(default=timezone.now)