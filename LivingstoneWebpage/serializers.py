from LivingstoneWebpage import models

from rest_framework import serializers


class GalleryImageSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.GalleryImage
        fields = ["image", "name", "description", "id"]


class OurWeaponSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.OurWeapon
        fields = "__all__"


class TeamMemberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.TeamMember
        fields = "__all__"


class ConstantElementSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = models.ConstantElement
        fields = "__all__"
