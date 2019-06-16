from LivingstoneWebpage import models

from rest_framework import serializers


class GalleryImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.GalleryImage
        fields = ["image", "name", "description", "span", "id"]


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
        fields = "__all__"
