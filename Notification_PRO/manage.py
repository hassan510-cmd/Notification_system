#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
# import django
# browser-sync start --proxy "localhost:8069/web" --files "*.html" "**/*.css"
def main():
    # print(django.VERSION)
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'Notification_Project.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)

if __name__ == '__main__':
    main()
# from Notification_Users.models import UserProfile
