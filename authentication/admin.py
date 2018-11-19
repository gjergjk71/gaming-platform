from django.contrib import admin

from .models import game,conn,Userprofile

admin.site.register(game)
admin.site.register(conn)
admin.site.register(Userprofile)