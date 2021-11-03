from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.viewsets import ViewSet, ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import NotificationProfileSerializer
from .models import NotificationProfile
from django.views.generic.base import TemplateView




class NotificationProfileViewSet(ViewSet):
    serializer_class = NotificationProfileSerializer
    def list(self, request, *args, **kwargs):
        queryset = NotificationProfile.objects.all()
        response = [
            {
                'id': notify.id,
                'title': notify.title,
                'content': notify.content,
                'sender': notify.sender.email,
                'state': notify.read
            } for notify in queryset]
        return Response({"all_notifications": response})

    def create(self, request):
        notify = NotificationProfileSerializer(data=request.data)
        if notify.is_valid():
            notify.save()
            return Response({'message': notify.data})
        else:
            return Response(notify.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self,request, pk=None):
        """Handles updating an object"""
        return Response({'http_method':'PUT'})


    def partial_update(self, request, pk=None):
        """Handle partial update"""
        notify = NotificationProfile.objects.get(pk=pk)
        new_state = False if notify.read else True
        updated_notify = NotificationProfileSerializer(
            instance=notify, data={'read': new_state}, partial=True)
        updated_notify.save() if updated_notify.is_valid() else print('not valid')
        return Response({'message': updated_notify.data})

    def destroy(self,request,pk=None):
        """Handle delete object"""
        notify=NotificationProfile.objects.get(pk=pk)
        notify.delete()
        # delete_result={'id':notify.id,'name':notify.name,'description': notify.description,'state':notify.state}
        return Response({'message': "delete_result"})
    
