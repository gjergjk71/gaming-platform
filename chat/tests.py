from django.test import TestCase
from django.shortcuts import reverse
from .models import GameMessage
from games.models import Game
from django.contrib.auth.models import User
from user_profile.models import UserProfile

# Create your tests here.

class TestViews(TestCase):
	def setUp(self):
		self.user = User.objects.create_user("test","test@gmail.com","123testing123")
		self.user_profile = UserProfile.objects.create(user=self.user)
		self.game = Game.objects.create(GameName="name",url="urlhere")
		self.game_message = GameMessage.objects.create(game=self.game,user_profile=self.user_profile,content="text")
	def test_view_permissions(self):
		response_game_chat = self.client.get(reverse("game_chat",args=[self.game.id]))
		self.assertEquals(response_game_chat.status_code,302)
		response_send_message_api = self.client.get(reverse("send_message_api",args=[self.game.id]))
		self.assertEquals(response_send_message_api.status_code,200)
		self.assertContains(response_send_message_api,'"successfull":false')
		response_send_message_api = self.client.post(reverse("send_message_api",args=[self.game.id]),
													data={"content":"testing"})
		self.assertEquals(response_send_message_api.status_code,200)
		self.assertContains(response_send_message_api,'"successfull":false')
