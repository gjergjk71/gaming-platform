from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class UserProfile(models.Model):
	user = models.ForeignKey(User,on_delete=models.CASCADE,unique=True)
	profile_image = models.ImageField(upload_to="profile_photos", blank=True, null=True)
