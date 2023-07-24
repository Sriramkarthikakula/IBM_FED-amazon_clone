from django.shortcuts import render,redirect
from django.contrib.auth.models import User,auth
# Create your views here.
def signin(request):
    return render(request,'signin.html')


def register(request):
    return render(request,'register.html')


def reg(request):
    if request.method=='POST':
        first_name=request.POST['first_name']
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']
        user = User.objects.create_user(first_name=first_name,username=username,email=email,password=password)
        user.save()
        user = auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            return redirect('/')
    return redirect('register')


def log(request):
    if request.method=='POST':
        username = request.POST['username']
        password = request.POST['password']
        user = auth.authenticate(username=username,password=password)
        if user is not None:
            auth.login(request,user)
            return redirect('/')
    return redirect('signin')


def logout(request):
    auth.logout(request)
    return redirect('/')

