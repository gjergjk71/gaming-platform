from django.urls import path
from django.contrib.auth import views as auth_views
from . import views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
	path("login",views.custom_login,name="login"),
	path("logout/",auth_views.logout,name="logout"),
	path('register',views.register,name="register"),
	path("valid_credentials_api",views.valid_credentials_api,name="valid_credentials_api"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
