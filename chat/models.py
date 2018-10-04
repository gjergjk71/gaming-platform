from django.db import models

# Create your models here.

class ChatRoom(models.Model):
	name = models.CharField(max_length=200)

class Message(models.Model):
	chatRoom = models.ForeignKey(ChatRoom,on_delete=models.CASCADE)
	message = models.TextField()

