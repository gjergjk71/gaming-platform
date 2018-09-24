from django.db import models
from games.models import Game
from user_profile.models import UserProfile
# Create your models here.

class GameMessage(models.Model):
	game = models.ForeignKey(Game,on_delete=models.CASCADE)
	user_profile = models.ForeignKey(UserProfile,on_delete=models.CASCADE)
	content = models.TextField()
	def __str__(self):
		if len(self.content) > 250:
			return "{}-{}...".format(self.user_profile,self.content[:247])
		return "{}-{}...".format(self.user_profile,self.content)