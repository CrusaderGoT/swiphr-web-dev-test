'''###dashboard/urls.py\nurl patterns for the dashboard app'''
from django.urls import path
from . import views

urlpatterns = [
    path('', views.dash, name='dashboard')
]
