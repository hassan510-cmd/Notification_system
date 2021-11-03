from django.db import models
from django.contrib.auth.models import AbstractBaseUser ,BaseUserManager
# Create your models here.
class UserProfile(AbstractBaseUser):
    first_name=models.CharField(max_length=255)
    last_name=models.CharField(max_length=255)
    email=models.EmailField(max_length=255,unique=True)
    password=models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff=models.BooleanField(default=True)

    def get_full_name(self):
        """used to get user full name"""
        return f"{self.first_name} {self.last_name}"

    def get_short_name(self):
        return self.first_name

    def __str__(self):
        return self.email

    def __unicode__(self):
        return self.name
class UserProfileManager(BaseUserManager):
    """help django work with our custom user model"""
    def create_user(self,fname,lname,email,password=None):
        """create new user"""
        if not email:
            raise ValueError('user must have email address')
        email=self.normalize_email(email)
        user=self.model(email=email,first_name=fname,last_name=lname)
        user.set_password(password)
        user.save(using=self._db)

    def create_superuser(self,fname,lname,email,password=None):
        user=self.create_user(fname,lname,email,password)
        user.is_superuser=True
        user.is_staff=True
        user.save(using=self._db)