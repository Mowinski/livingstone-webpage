# Generated by Django 2.2.2 on 2019-06-16 18:15

from django.db import migrations
from LivingstoneWebpage.models import TeamMember


def populate_db(apps, _):
    PositionName = apps.get_model('LivingstoneWebpage', 'PositionName')

    for position in TeamMember.POSITION:
        PositionName.objects.create(name=position[1])


class Migration(migrations.Migration):

    dependencies = [
        ('LivingstoneWebpage', '0009_auto_20190616_1812'),
    ]

    operations = [
        migrations.RunPython(populate_db)
    ]
