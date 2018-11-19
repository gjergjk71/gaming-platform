from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
	path("login",views.custom_login,name="login"),
	path("logout/",auth_views.logout,name="logout"),
	path('register',views.register,name="register"),
	path('gamepage/<int:game_id>',views.gamepage,name="gamepage"),
	path('home',views.home,name='home'),
	path("spaceGame",views.spaceGame,name="spaceGame"),
	path("battleship",views.battleship,name="battleship"),
	path("snake",views.snake,name="snake"),
	path("tetris",views.tetris,name="tetris")


]