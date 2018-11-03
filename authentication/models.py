from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class game(models.Model):
	id = models.AutoField(primary_key=True)
	GameName= models.CharField(max_length=50)
	url=models.TextField()


class conn(models.Model):
	id=models.AutoField(primary_key=True)
	userId = models.ForeignKey(User,on_delete=models.CASCADE)
	gameId=models.ForeignKey(game,on_delete=models.CASCADE)
	score=models.IntegerField()

class Userprofile(models.Model):
	id = models.AutoField(primary_key=True)
	Userprofile= models.OneToOneField(User,on_delete=models.CASCADE)
	profile_image =models.ImageField(upload_to="profile_photos", blank=True, null=True)