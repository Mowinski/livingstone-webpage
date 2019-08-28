import uuid as uuid
from django.contrib.auth.models import User
from django.contrib.sites.managers import CurrentSiteManager
from django.contrib.sites.models import Site
from django.core import validators
from django.core.mail import send_mail
from django.conf import settings
from django.db import models
from django.db.models import Max
from django.db.models.signals import post_save
from django.dispatch import receiver

from thumbnails.fields import ImageField


class GalleryImage(models.Model):
    image = ImageField(
        verbose_name="Picture", help_text="size 900x700 px (square size 300x175px)"
    )
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
    span = models.IntegerField(
        default=4,
        validators=[validators.MinValueValidator(1), validators.MaxValueValidator(12)],
        help_text="Digit between 1-12. How much space image should take. See bootstrap grid",
    )
    order = models.IntegerField(default=0)
    site = models.ForeignKey(Site, on_delete=models.CASCADE)
    uuid = models.UUIDField(default=uuid.uuid4)

    objects = models.Manager()
    on_site = CurrentSiteManager()

    @classmethod
    def get_highest_order(cls):
        value = cls.objects.all().aggregate(Max("order"))["order__max"]
        return value if value is not None else 0

    def get_fields_value(self):
        return {
            "image": self.image,
            "name": self.name,
            "description": self.description,
            "span": self.span,
            "order": self.order,
        }

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["order"]


class OurWeapon(models.Model):
    image = models.ImageField(verbose_name="Picture")
    name = models.CharField(max_length=250, verbose_name="Tool name")
    order = models.IntegerField(default=0)
    span = models.IntegerField(
        default=4,
        validators=[validators.MinValueValidator(1), validators.MaxValueValidator(12)],
        help_text="Digit between 1-12. How much space avatar should take. See bootstrap grid",
    )
    site = models.ForeignKey(Site, on_delete=models.CASCADE)
    uuid = models.UUIDField(default=uuid.uuid4)

    objects = models.Manager()
    on_site = CurrentSiteManager()

    @classmethod
    def get_highest_order(cls):
        return cls.objects.all().aggregate(Max("order"))["order__max"]

    def get_fields_value(self):
        return {
            "image": self.image,
            "name": self.name,
            "order": self.order,
            "span": self.span,
        }

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
    avatar = models.ImageField(verbose_name="Avatar")
    name = models.CharField(max_length=250, verbose_name="First and last name")
    position = models.ForeignKey(
        PositionName, null=True, blank=True, default=None, on_delete=models.SET_NULL
    )
    order = models.IntegerField(default=0)
    span = models.IntegerField(
        default=4,
        validators=[validators.MinValueValidator(1), validators.MaxValueValidator(12)],
        help_text="Digit between 1-12. How much space avatar should take. See bootstrap grid",
    )
    site = models.ForeignKey(Site, on_delete=models.CASCADE)
    uuid = models.UUIDField(default=uuid.uuid4)

    objects = models.Manager()
    on_site = CurrentSiteManager()

    @classmethod
    def get_highest_order(cls):
        return cls.objects.all().aggregate(Max("order"))["order__max"]

    def get_fields_value(self):
        return {
            "avatar": self.avatar,
            "name": self.name,
            "position": self.position,
            "order": self.order,
            "span": self.span,
        }

    def __str__(self):
        return self.name

    class Meta:
        ordering = ["order"]


class ConstantElement(models.Model):
    key = models.CharField(
        primary_key=True, max_length=50, verbose_name="Key"
    )
    text = models.TextField(null=True, default=None, blank=True, verbose_name="Text")
    image = models.ImageField(
        null=True,
        default=None,
        blank=True,
        verbose_name="Picture",
        help_text="About image: 1900x710px",
    )
    link = models.URLField(null=True, default=None, blank=True, verbose_name="Link")
    site = models.ForeignKey(Site, on_delete=models.CASCADE)
    uuid = models.UUIDField(default=uuid.uuid4)

    objects = models.Manager()
    on_site = CurrentSiteManager()

    def get_fields_value(self):
        return {
            "key": self.key,
            "text": self.text,
            "image": self.image,
            "link": self.link,
        }

    def __str__(self):
        return self.key

    class Meta:
        unique_together = (('key', 'uuid'),)


class SeoMetaData(models.Model):
    site = models.OneToOneField(
        Site, verbose_name="Site", related_name="meta", on_delete=models.CASCADE
    )
    title = models.CharField(max_length=65, verbose_name="Head title")
    description = models.CharField(max_length=160, verbose_name="Meta description")
    keywords = models.CharField(
        max_length=1000, verbose_name="Keywords (comma separated)"
    )

    objects = models.Manager()
    on_site = CurrentSiteManager()

    def __str__(self):
        return f"{self.site.domain}"


class ContactMessage(models.Model):
    author = models.CharField(max_length=250, verbose_name="First and last name", default=None, blank=True, null=True)
    email = models.EmailField(verbose_name="Email address")
    message = models.TextField(verbose_name="Message")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.email} received at: {self.created_at}"


@receiver(post_save, sender=ContactMessage)
def save_profile(sender, instance, **kwargs):
    admin_emails = list(User.objects.filter(is_staff=True).values_list('email', flat=True))
    email_from = f"{instance.author} <{instance.email}>"
    send_mail(
        'New message from livingstone-game.com',
        instance.message,
        email_from,
        admin_emails,
        fail_silently=False,
    )

    send_mail(
        "You messages to livingstone-game.com",
        'We received your message:\n\n' + instance.message,
        f'Kamil Mowinski <{settings.EMAIL_HOST_USER}>',
        [instance.email],
        fail_silently=False,
    )
