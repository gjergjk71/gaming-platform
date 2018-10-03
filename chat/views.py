from django.shortcuts import render,redirect,get_object_or_404
from django.utils.safestring import mark_safe
from .models import ChatRoom,Message
import json

def index(request):
	return render(request, 'chat/index.html', {})

def room(request, room_name):
	chatRoom = ChatRoom.objects.filter(name=room_name.lower())
	if chatRoom:
		messages = Message.objects.filter(chatRoom=chatRoom[0]).values_list('id', 'message')
		return render(request, 'chat/room.html', {
			'room_name_json': mark_safe(json.dumps(room_name)),
			"messages":list(messages)
		})
	else:
		return redirect("/chat/")