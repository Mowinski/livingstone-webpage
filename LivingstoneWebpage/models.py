from django.contrib.sites.models import Site
from django.core import validators
from django.db import models
from django.db.models import Max


class GalleryImage(models.Model):
    image = models.ImageField(verbose_name="Picture", help_text="size 900x700 px (square size 300x175px)")
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
    span = models.IntegerField(default=4,
                               validators=[validators.MinValueValidator(1), validators.MaxValueValidator(12)],
                               help_text="Digit between 1-12. How much space image should take. See bootstrap grid")
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
    span = models.IntegerField(default=4,
                               validators=[validators.MinValueValidator(1), validators.MaxValueValidator(12)],
                               help_text="Digit between 1-12. How much space avatar should take. See bootstrap grid")

    @classmethod
    def get_highest_order(cls):
        return cls.objects.all().aggregate(Max("order"))["order__max"]

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["order"]


class PositionName(models.Model):
    name = models.CharField(max_length=100, help_text="Position name")

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["name"]


class TeamMember(models.Model):
    POSITION = (
        ("pl", "Project Leader"),
        ("lca", "Lead Concept Artist"),
        ("lgd", "Lead Game Designer"),
        ("ca", "Concept Artist"),
        ("3d", "3D Graphic"),
        ("gp", "Gameplay Programmer"),
        ("p", "Producer"),
        ("ss", "Social Specialist"),
    )

    avatar = models.ImageField(verbose_name="Avatar")
    name = models.CharField(max_length=250, verbose_name="First and last name")
    position = models.ForeignKey(PositionName, null=True, blank=True, default=None, on_delete=models.SET_NULL)
    order = models.IntegerField(default=0)
    span = models.IntegerField(default=4, validators=[validators.MinValueValidator(1), validators.MaxValueValidator(12)],
                               help_text="Digit between 1-12. How much space avatar should take. See bootstrap grid")

    @classmethod
    def get_highest_order(cls):
        return cls.objects.all().aggregate(Max("order"))["order__max"]

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
        null=True, default=None, blank=True, verbose_name="Picture",
        help_text="About image: 1900x710px",
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
