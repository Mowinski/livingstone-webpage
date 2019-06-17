# Generated by Django 2.2.2 on 2019-06-11 19:13

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("LivingstoneWebpage", "0006_auto_20190611_1042")]

    operations = [
        migrations.AddField(
            model_name="ourweapon",
            name="span",
            field=models.IntegerField(
                default=4,
                help_text="Digit between 1-12. How much space avatar should take. See bootstrap grid",
                validators=[
                    django.core.validators.MinValueValidator(1),
                    django.core.validators.MaxValueValidator(12),
                ],
            ),
        )
    ]