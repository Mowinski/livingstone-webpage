# Generated by Django 2.2.4 on 2019-08-28 04:35

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('LivingstoneWebpage', '0019_auto_20190827_1446'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='positionname',
            name='site',
        ),
        migrations.AddField(
            model_name='constantelement',
            name='uuid',
            field=models.UUIDField(default=uuid.uuid4),
        ),
        migrations.AddField(
            model_name='galleryimage',
            name='uuid',
            field=models.UUIDField(default=uuid.uuid4),
        ),
        migrations.AddField(
            model_name='ourweapon',
            name='uuid',
            field=models.UUIDField(default=uuid.uuid4),
        ),
        migrations.AddField(
            model_name='teammember',
            name='uuid',
            field=models.UUIDField(default=uuid.uuid4),
        ),
    ]