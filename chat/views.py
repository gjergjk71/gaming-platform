from django.shortcuts import render,get_object_or_404,redirect,reverse
from django.http import HttpResponse
from .models import GameMessage
from user_profile.models import UserProfile
from games.models import Game
from django.core import serializers
# Create your views here.

def game_chat(request,game_id):
	if request.user.is_authenticated:
		game = get_object_or_404(Game,pk=game_id)
		game_messages = GameMessage.objects.filter(game=game)
		context = {"game":game,"game_messages":game_messages}
		return render(request,"chat/chat.html",context)
	else:
		return redirect("/")

def get_messages_api(request,game_id):
	game = get_object_or_404(Game,pk=game_id)
	game_messages = GameMessage.objects.filter(game=game)
	data = serializers.serialize('json', game_messages)
	return HttpResponse(data,content_type="application/json")

def send_message_api(request,game_id):
	if request.user.is_authenticated:
		if request.method == "GET":
			return redirect(reverse("game_chat",args=[game_id]))
		try:
			game = get_object_or_404(Game,pk=game_id)
			user_profile = get_object_or_404(UserProfile,user=request.user)
			content = request.POST.get("content")
			GameMessage.objects.create(game=game,
									   user_profile=user_profile,
									   content=content)
			data = serializers.serialize('json', {"successfull":True})
		except:
			data = serializers.serialize('json', {"successfull":False})
	else:
		data = '{"successfull":false}'
	return HttpResponse(data,content_type="application/json")
