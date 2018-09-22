from django.contrib import admin

from .models import Game,Conn,UserProfile

admin.site.register(Game)
admin.site.register(Conn)
admin.site.register(UserProfile)
