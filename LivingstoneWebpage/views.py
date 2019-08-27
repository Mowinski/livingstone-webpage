from django.contrib.sites.models import Site
from rest_framework.decorators import action
from rest_framework.mixins import CreateModelMixin
from rest_framework.response import Response

from LivingstoneWebpage import models, serializers

from django.views.generic import TemplateView
from rest_framework import viewsets


class GalleryImageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.GalleryImage.on_site.all()
    serializer_class = serializers.GalleryImageSerializer


class OurWeaponViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.OurWeapon.on_site.all()
    serializer_class = serializers.OurWeaponSerializer


class TeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.TeamMember.on_site.all()
    serializer_class = serializers.TeamMemberSerializer


class ConstantElementViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.ConstantElement.on_site.all()
    serializer_class = serializers.ConstantElementSerializer

    @action(detail=False)
    def links(self, request):
        queryset = self.get_queryset().filter(link__isnull=False)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class ContactViewSet(CreateModelMixin, viewsets.GenericViewSet):
    serializer_class = serializers.ContactMessageSerializer
    queryset = models.ContactMessage.objects.all()

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)


class HomePageView(TemplateView):
    template_name = "index_react.html"

    def get_context_data(self, **kwargs):
        return {"site": Site.objects.get_current()}
