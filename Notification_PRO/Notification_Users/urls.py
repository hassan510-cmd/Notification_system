from django.urls import path
from django.conf.urls import include , url
from rest_framework.routers import DefaultRouter
from .views import UserProfileViewSet
from .views import UserUnreadNotifyUViewSet
router=DefaultRouter()
router.register('profiles',UserProfileViewSet,basename='profiles')
router.register('unread-notify',UserUnreadNotifyUViewSet,basename='unread-notify')
urlpatterns=[
    url('',include(router.urls))
]