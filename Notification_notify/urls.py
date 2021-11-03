from django.urls import path
from django.conf.urls import include , url
from rest_framework.routers import DefaultRouter
from .views import NotificationProfileViewSet
router=DefaultRouter()
router.register('notify',NotificationProfileViewSet,basename='notify')
urlpatterns=[
    url('',include(router.urls))
]