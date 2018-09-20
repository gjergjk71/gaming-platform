from django.test import TestCase
from django.shortcuts import reverse
from django.contrib.auth.models import User
# Create your tests here.

class TestAuthentication(TestCase):
	def setUp(self):
		self.user = User.objects.create_user("testing","testing@gmail.com","testing")