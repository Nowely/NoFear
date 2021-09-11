from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.forms import UserCreationForm as BaseUserCreationForm, UserChangeForm as BaseUserChangeForm
from .models import User


class UserCreationForm(BaseUserCreationForm):
    class Meta:
        model = User
        fields = ('username', 'email')


class UserChangeForm(BaseUserChangeForm):
    class Meta:
        model = User
        fields = ('username', 'email')


# Register your models here.

class UserAdmin(BaseUserAdmin):
    add_form = UserCreationForm
    form = UserChangeForm
    model = User
    list_display = ['email', 'username', ]


admin.site.register(User, UserAdmin)
