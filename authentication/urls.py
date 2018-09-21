from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
	path("login",views.custom_login,name="login"),
	path("logout/",auth_views.logout,name="logout"),
	path('register',views.register,name="register"),

]
