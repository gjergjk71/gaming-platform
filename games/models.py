from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Game(models.Model):
	GameName = models.CharField(max_length=50)
	url = models.CharField(max_length=500)

class Score(models.Model):
	userId = models.ForeignKey(User,on_delete=models.CASCADE)
	gameId = models.ForeignKey(Game,on_delete=models.CASCADE)
	score = models.IntegerField()
