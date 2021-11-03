from rest_framework import serializers
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    """
    handle user model
    """

    class Meta:
        model=UserProfile
        fields=('id','first_name','last_name','email','password')
        extra_kwargs={'password':{'write_only':True}}