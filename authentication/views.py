from django.shortcuts import render, redirect,reverse
from django.contrib.auth.views import login
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
# Create your views here.
def custom_login(request):
	if request.user.is_authenticated:
		return redirect("/")
	elif request.method == "POST":            
		username=request.POST.get("username")
		password = request.POST.get("password")                     
		user = authenticate(request, username=username, password=password)
		if user is not None:
			return login(request)
		else:
			return render(request,"registration/login.html",{'invalid': True })
	elif request.method == "GET":
		return login(request)


def home(request):
	return render(request,'registration/home.html',{})

def gamepage(request):
	return render(request,'registration/gamepage.html',{})
	
def register(request):
	if request.user.is_authenticated:
		return redirect("/auth/home")
	else:
		if request.method == 'POST':
			form = UserCreationForm(request.POST)
			if form.is_valid():
				try:
					user = form.save(commit=False)
					user.first_name = request.POST.get("first_name")
					user.last_name = request.POST.get("last_name")
					user.username = request.POST.get("username")
					user.email = request.POST.get("email")
					user.save()
				except:
					return render(request, 'registration/register.html', {'form': form},{'correct':True})

			else:
				return render(request, 'registration/register.html', {'form': form},{'error':False})
			return redirect(reverse("login"))
		else:
			form = UserCreationForm()
			return render(request, 'registration/register.html', {'form': form})




def spaceGame(request):
	return render(request,"Games/spaceGame.html",{})

def battleship(request):
	return render(request,"Games/battleship.html",{})


def snake(request):
	return render(request,"Games/snake.html",{})