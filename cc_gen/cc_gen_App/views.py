from django.shortcuts import render
from django.http import HttpResponse
# from django.utils import 

# Create your views here.


def home(request):
    return render(request,'index.html')

def product(request):
    return render(request,'product.html')

def contact(request):
    return render(request,'contact.html')

def faq(request):
    return render(request,'faq.html')


def aboutus(request):
    return render(request,'about-us.html')


# def contactPage(request):
#     if request.method == 'post':
#         pass
#     else:   
#         return render(request,'contact.html',{})
