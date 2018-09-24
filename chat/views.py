from django.shortcuts import render,get_object_or_404
from django.http import HttpResponse
from .models import GameMessage
from games.models import Game
from django.core import serializers
# Create your views here.

def game_chat(request,game_id):
	game = get_object_or_404(Game,pk=game_id)
	game_messages = GameMessage.objects.filter(game=game)
	context = {"game":game,"game_messages":game_messages}
	return render(request,"chat/chat.html",context)

def get_messages_api(request,game_id):
	game = get_object_or_404(Game,pk=game_id)
	game_messages = GameMessage.objects.filter(game=game)
	data = serializers.serialize('json', game_messages)
	return HttpResponse(data,content_type="application/json")