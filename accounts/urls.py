from django.urls import path
from . import views

urlpatterns = [
    path('signin',views.signin,name='signin'),
    path('register',views.register,name='register'),
    path('reg',views.reg,name='reg'),
    path('log',views.log,name='log'),
    path('logout',views.logout,name="logout"),
]