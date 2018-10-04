from django.shortcuts import render, redirect
from django.contrib.auth.views import login
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpResponse 
import json

# Create your views here.

def valid_credentials_api(request):
	username = request.POST.get("username")
	password = request.POST.get("password")
	user = authenticate(request, username=username, password=password)
	if user is not None:
		login(request)
		data = {"valid_credentials":True}
	else:
		data = {"valid_credentials":False}
	return HttpResponse(json.dumps(data),content_type="application/json")


def custom_login(request):
	if request.user.is_authenticated:
		return redirect("/")
	return render(request,"registration/login.html",{'invalid': True })
	
def register(request):
	if request.user.is_authenticated:
		return redirect("/")
	else:
		if request.method == 'POST':
			form = UserCreationForm(request.POST)
			if form.is_valid():
				user = form.save(commit=False)
				user.first_name = request.POST.get("first_name")
				user.last_name = request.POST.get("last_name")
				user.username = request.POST.get("username")
				user.email = request.POST.get("email")
				user.save()
				return redirect('/auth/login')
			else:
				return render(request, 'registration/register.html', {'form': form})
		else:
			form = UserCreationForm()
			return render(request, 'registration/register.html', {'form': form})