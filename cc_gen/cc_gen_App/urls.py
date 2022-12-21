import imp
from django.urls import path
from . import views
from django.http import HttpResponse

urlpatterns =[
    path('',views.home, name="homePage"), 
    path('product.html/',views.product, name="product"),
    path('about-us.html/',views.aboutus, name="aboutus"), 
    path('contact.html/',views.contact,name="contact"), 
    path('faq.html/',views.faq,name="faq"), 
]