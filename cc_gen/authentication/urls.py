import imp
from django.urls import path
from . import views

urlpatterns =[
    path('login.html/',views.login,name="login"), 
    path('signup.html/',views.signup,name="signup"), 
]