from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.viewsets import ViewSet, ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserProfileSerializer
from Notification_notify.serializers import NotificationProfileSerializer
from .models import UserProfile
from Notification_notify.models import NotificationProfile

# Create your views here.

class UserProfileViewSet(ViewSet):
    serializer_class = UserProfileSerializer

    def list(self):
        result = UserProfile.objects.all()
        response = [
            {
                'id': user.id,
                'email': user.email,
                'first_name': user.first_name,
                'last_name': user.last_name,
                'full_name': user.get_full_name()
            } for user in result]
        print(response)
        return Response({"all_users": response})

    def create(self, request):
        user = UserProfileSerializer(data=request.data)
        if user.is_valid():
            user.save()
            return Response({'new_user': user.data})
        else:
            return Response(user.errors, status=status.HTTP_400_BAD_REQUEST)


class UserUnreadNotifyUViewSet(ViewSet):
    serializer_class = NotificationProfileSerializer

    def create(self, request):
        notify = NotificationProfileSerializer(data=request.data)
        if notify.is_valid():
            notify.save()
            return Response({'message': notify.data})
        else:
            return Response(notify.errors, status=status.HTTP_400_BAD_REQUEST)

    def list(self):
        return Response({"task": "not allowed"})

    def retrieve(self, request, pk=None):
        """retrieve all notifications send by specific user"""
        user = UserProfile.objects.get(id=pk)
        get_notification = NotificationProfile.objects.filter(
            receiver_email=user.email, read=False)

        print(user.email)

        response = [
            {
                'id': notify.id,
                'title': notify.title,
                'content': notify.content,
                'sender': notify.sender.email,
                'state': notify.read
            } for notify in get_notification]

        return Response({
            'username': user.get_full_name(),
            'useremail': user.email,
            "notifications": response,
            'count': len(get_notification)
        })

