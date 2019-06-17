# Generated by Django 2.2.2 on 2019-06-17 05:47
import os

from django.conf import settings
from django.db import migrations
from PIL import Image


def change_image_file_type(apps, _):
    for image_file in os.listdir(settings.MEDIA_ROOT):
        if image_file.endswith("webp"):
            continue
        print("Processing: ", image_file)
        img = Image.open(os.path.join(settings.MEDIA_ROOT, image_file))
        new_file_name = "{path}/{file_name}.webp".format(
            path=settings.MEDIA_ROOT, file_name=image_file.split(".")[0]
        )
        img.save(new_file_name, format="WEBP", quality=100, method=6, lossless=True)
        os.remove(os.path.join(settings.MEDIA_ROOT, image_file))


def change_image_file_type_in_db(apps, _):
    GalleryImage = apps.get_model("LivingstoneWebpage", "GalleryImage")
    OurWeapon = apps.get_model("LivingstoneWebpage", "OurWeapon")
    TeamMember = apps.get_model("LivingstoneWebpage", "TeamMember")
    ConstantElement = apps.get_model("LivingstoneWebpage", "ConstantElement")
    for object in GalleryImage.objects.all():
        new_name = "{}.webp".format(object.image.name.split(".")[0])
        object.image.name = new_name
        object.save()

    for object in OurWeapon.objects.all():
        new_name = "{}.webp".format(object.image.name.split(".")[0])
        object.image.name = new_name
        object.save()

    for object in TeamMember.objects.all():
        new_name = "{}.webp".format(object.avatar.name.split(".")[0])
        object.avatar.name = new_name
        object.save()

    for object in ConstantElement.objects.all():
        new_name = "{}.webp".format(object.image.name.split(".")[0])
        object.image.name = new_name
        object.save()


def dummy_function(*args, **kwargs):
    pass


class Migration(migrations.Migration):

    dependencies = [("LivingstoneWebpage", "0014_constantelement_link")]

    operations = [
        migrations.RunPython(change_image_file_type, dummy_function),
        migrations.RunPython(change_image_file_type_in_db, dummy_function),
    ]
