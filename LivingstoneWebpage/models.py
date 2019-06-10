from django.contrib.sites.models import Site
from django.db import models
from django.db.models import Max


class GalleryImage(models.Model):
    image = models.ImageField(verbose_name="Picture", help_text="size 900x600 px")
    name = models.CharField(
        max_length=25, verbose_name="Picture name", help_text="Max 25 characters"
    )
    description = models.TextField(
        null=True,
        default=None,
        blank=True,
        verbose_name="Description",
        max_length=250,
        help_text="Max 250 characters",
    )
    order = models.IntegerField(default=0)

    @classmethod
    def get_highest_order(cls):
        return cls.objects.all().aggregate(Max("order"))["order__max"]

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["order"]


class OurWeapon(models.Model):
    image = models.ImageField(verbose_name="Picture")
    name = models.CharField(max_length=250, verbose_name="Tool name")
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["order"]


class TeamMember(models.Model):
    POSITION = (
        ("pl", "Project Leader"),
        ("lca", "Lead Concept Artist"),
        ("lgd", "Lead Game Designer"),
        ("ca", "Concept Artist"),
        ("3d", "3D Graphic"),
        ("gp", "Gameplay programmer"),
        ("p", "Producer"),
        ("ss", "Social Specialist"),
    )

    avatar = models.ImageField(verbose_name="Avatar")
    name = models.CharField(max_length=250, verbose_name="First and last name")
    position = models.CharField(max_length=3, choices=POSITION)
    order = models.IntegerField(default=0)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["order"]


class ConstantElement(models.Model):
    key = models.CharField(
        unique=True, primary_key=True, max_length=50, verbose_name="Key"
    )
    text = models.TextField(null=True, default=None, blank=True, verbose_name="Text")
    image = models.ImageField(
        null=True, default=None, blank=True, verbose_name="Picture"
    )

    def __str__(self):
        return self.key


class SeoMetaData(models.Model):
    site = models.OneToOneField(
        Site, verbose_name="Site", related_name="meta", on_delete=models.CASCADE
    )
    title = models.CharField(max_length=65, verbose_name="Head title")
    description = models.CharField(max_length=160, verbose_name="Meta description")
    keywords = models.CharField(
        max_length=1000, verbose_name="Keywords (comma separated)"
    )

    def __str__(self):
        return f"{self.site.domain}"
