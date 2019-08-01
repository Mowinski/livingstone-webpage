from LivingstoneWebpage import models

from rest_framework import serializers


class GalleryImageSerializer(serializers.HyperlinkedModelSerializer):
    image = serializers.CharField(source='image.thumbnails.small.url', read_only=True)
    image_full = serializers.CharField(source='image.thumbnails.large.url', read_only=True)

    class Meta:
        model = models.GalleryImage
        fields = ["name", "description", "span", "id", "image_full", "image"]


class OurWeaponSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.OurWeapon
        fields = ["image", "name", "span", "id"]


class TeamMemberSerializer(serializers.HyperlinkedModelSerializer):
    position = serializers.StringRelatedField()

    class Meta:
        model = models.TeamMember
        fields = ["avatar", "name", "position", "span", "id"]


class ConstantElementSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.ConstantElement
        fields = ["key", "text", "image", "link"]


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ContactMessage
        fields = ["author", "email", "message"]


class ActionSerializer(serializers.Serializer):
    status = serializers.BooleanField()
    message = serializers.CharField(required=False)

