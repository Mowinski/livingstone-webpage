# Generated by Django 2.2.2 on 2019-06-16 18:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [("LivingstoneWebpage", "0012_remove_teammember_position")]

    operations = [
        migrations.RenameField(
            model_name="teammember", old_name="position_name", new_name="position"
        )
    ]
