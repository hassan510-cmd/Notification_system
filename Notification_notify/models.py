from django.db import models
# from Notification_Project.Notification_Users.models import UserProfile
from Notification_Users.models import UserProfile


# Create your models here.
class NotificationProfile(models.Model):
    title = models.CharField(max_length=30)
    content = models.CharField(max_length=3000)
    sender = models.ForeignKey(UserProfile, related_name='notifications', on_delete=models.CASCADE)
    receiver_email = models.CharField(max_length=255)
    created_date = models.DateTimeField(auto_now_add=True)
    read = models.BooleanField(default=False)

    def __str__(self):
        return str(
            {
                'title': self.title,
                'content': self.content,
                'sender': self.sender,
                'receiver_email': self.receiver_email,
                'created_date':self.created_date,
                'read':self.read
            })

    # def __repr__(self):
    #     return str(
    #         {
    #             'title': self.title,
    #             'content': self.content,
    #             'sender': self.sender,
    #             'receiver_email': self.receiver_email,
    #             'created_date':self.created_date,
    #             'read':self.read
    #         })
    # class NotificationUsersProfile(models.Model):
