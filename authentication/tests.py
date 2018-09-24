from django.test import TestCase
from django.shortcuts import reverse
from django.contrib.auth.models import User
# Create your tests here.

class TestAuthentication(TestCase):
	def setUp(self):
		self.user = User.objects.create_user("testing","testing@gmail.com","testing")
	def test_200_login(self):
		response = self.client.get(reverse("login"))
		self.assertEquals(response.status_code,200)
		response2 = self.client.get(reverse("register"))
		self.assertEquals(response2.status_code,200)
	def test_302_login(self):
		credentials = {"username":"testing","password":"testing"}
		response = self.client.post(reverse("login"),data=credentials)
		self.assertEquals(response.status_code,302)
	def test_302_register(self):
		invalid_credentials = {
					   "first_name":"testing",
					   "last_name":"testing",
					   "username":"testing",
					   "email":"testing@gmail.com",
					   "password1":"testing",
					   "password2":"testing"} #Because password too similar to username
		valid_credentials = {
						"first_name":"testing",
					   "last_name":"testing",
					   "username":"testing2",
					   "email":"testing@gmail.com",
					   "password1":"123.123.123.123",
					   "password2":"123.123.123.123"}
		response = self.client.post(reverse("register"),data=valid_credentials)
		self.assertEquals(response.status_code,302)

		response2 = self.client.post(reverse("register"),data=invalid_credentials)
		self.assertEquals(response2.status_code,200)
	def test_redirect_if_logged_in(self):
		self.client.force_login(self.user)
		response = self.client.get(reverse("login"))
		self.assertEquals(response.status_code,302)