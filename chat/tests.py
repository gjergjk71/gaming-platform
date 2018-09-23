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
