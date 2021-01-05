from django.shortcuts import render

# Create your views here.

def hero_list(request):
    return render(request, 'herochronology/hero_list.html',{})
