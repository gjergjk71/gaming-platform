from django.db import models

# Create your models here.

class Game(models.Model):
	GameName = models.CharField(max_length=50)
	url = models.CharField(max_length=500)

