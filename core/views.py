from django.http import HttpResponse
from django.shortcuts import render
from django.views import View




class HomeView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'index.html', {})