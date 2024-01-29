from django.contrib.auth.views import LoginView
from .forms import EmailAuthenticationForm


class CustomLoginView(LoginView):
    form_class = EmailAuthenticationForm
