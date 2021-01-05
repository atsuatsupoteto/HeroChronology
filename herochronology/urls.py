from django.urls import path

#herochronology内のviewをすべてimportする
from . import views

urlpatterns = [
    path('', views.hero_list, name='hero_list'),
]