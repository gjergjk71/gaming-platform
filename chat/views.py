from django.shortcuts import render,get_object_or_404
from .models import GameMessage
from games.models import Game
# Create your views here.

def game_chat(request,game_id):
	game = get_object_or_404(Game,pk=game_id)
	game_messages = GameMessage.objects.filter(game=game)
	context = {"game":game,"game_messages":game_messages}
	return render(request,"chat/chat.html",context)