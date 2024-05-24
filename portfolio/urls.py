from .views import main, contact_view
from django.urls import path

urlpatterns = [
    path('', main, name='main'),
    path('contact/', contact_view, name='contact')
]
