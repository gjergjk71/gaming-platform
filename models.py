from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Game(models.Model):
	id = models.AutoField(primary_key=True)
	GameName = models.CharField(max_length=50)
	url = models.TextField()


class Conn(models.Model):
	id = models.AutoField(primary_key=True)
	userId = models.ForeignKey(User,on_delete=models.CASCADE)
	gameId = models.ForeignKey(Game,on_delete=models.CASCADE)
	score = models.IntegerField()

class UserProfile(models.Model):
	id = models.AutoField(primary_key=True)
	user = models.ForeignKey(User,on_delete=models.CASCADE,unique=True)
	profile_image = models.ImageField(upload_to="profile_photos", blank=True, null=True)
