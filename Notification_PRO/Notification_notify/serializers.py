from rest_framework.serializers import ModelSerializer
from .models import NotificationProfile

class NotificationProfileSerializer(ModelSerializer):

    class Meta:
        model=NotificationProfile
        fields='__all__'