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
	def test_302(self):
		credentials = {"username":"testing","password":"testing"}
		response = self.client.post(reverse("login"),data=credentials)
		self.assertEquals(response.status_code,302)
	def test_redirect_if_logged_in(self):
		self.client.force_login(self.user)
		response = self.client.get(reverse("login"))
		self.assertEquals(response.status_code,302)