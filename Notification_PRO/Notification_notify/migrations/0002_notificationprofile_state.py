# Generated by Django 2.2.24 on 2021-11-02 16:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Notification_notify', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='notificationprofile',
            name='state',
            field=models.BooleanField(default=False),
        ),
    ]
