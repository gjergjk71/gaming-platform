from django.test import TestCase
from django.shortcuts import reverse
from django.contrib.auth.models import User
# Create your tests here.

class TestAuthentication(TestCase):
	def setUp(self):
		self.user = User.objects.create_user("testing","testing@gmail.com","testing")
	def test_200(self):
		response = self.client.get(reverse("login"))
		self.assertEquals(response.status_code,200)