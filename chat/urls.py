from django.conf.urls import url

from . import views

urlpatterns = [
<<<<<<< HEAD
    url(r'^$', views.index, name='index'),
    url(r'^(?P<room_name>[^/]+)/$', views.room, name='room'),
]
=======
	path("game_chat/<int:game_id>",views.game_chat,name="game_chat"),
	path("get_messages_api/<int:game_id>",views.get_messages_api,name="get_messages_api"),
	path("send_message_api/<int:game_id>",views.send_message_api,name="send_message_api"),
]
>>>>>>> 0465e43371d4e8239a33a46a6b1ececd56f8cab9
