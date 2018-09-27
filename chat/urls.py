from django.urls import path
from . import views

urlpatterns = [
	path("game_chat/<int:game_id>",views.game_chat,name="game_chat"),
	path("get_messages_api/<int:game_id>",views.get_messages_api,name="get_messages_api"),
	path("send_message_api/<int:game_id>",views.send_message_api,name="send_message_api"),
]
