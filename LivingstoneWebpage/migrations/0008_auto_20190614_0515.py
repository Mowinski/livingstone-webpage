# Generated by Django 2.2.2 on 2019-06-14 05:15

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [("LivingstoneWebpage", "0007_ourweapon_span")]

    operations = [
        migrations.AddField(
            model_name="galleryimage",
            name="span",
            field=models.IntegerField(
                default=4,
                help_text="Digit between 1-12. How much space image should take. See bootstrap grid",
                validators=[
                    django.core.validators.MinValueValidator(1),
                    django.core.validators.MaxValueValidator(12),
                ],
            ),
        ),
        migrations.AlterField(
            model_name="constantelement",
            name="image",
            field=models.ImageField(
                blank=True,
                default=None,
                help_text="About image: 1900x710px",
                null=True,
                upload_to="",
                verbose_name="Picture",
            ),
        ),
        migrations.AlterField(
            model_name="galleryimage",
            name="image",
            field=models.ImageField(
                help_text="size 900x700 px", upload_to="", verbose_name="Picture"
            ),
        ),
    ]
