# Generated by Django 2.2.24 on 2021-11-03 14:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Notification_notify', '0003_auto_20211102_1643'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notificationprofile',
            name='sender',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='notifications', to='Notification_Users.UserProfile', to_field='email'),
        ),
    ]
