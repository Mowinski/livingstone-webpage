from django.contrib.sites.models import Site
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from rest_framework.decorators import action
from rest_framework.response import Response

from LivingstoneWebpage import models, serializers

from django.views.generic import TemplateView
from rest_framework import viewsets


@method_decorator(cache_page(60 * 30), name="dispatch")
class GalleryImageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.GalleryImage.objects.all()
    serializer_class = serializers.GalleryImageSerializer


@method_decorator(cache_page(60 * 30), name="dispatch")
class OurWeaponViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.OurWeapon.objects.all()
    serializer_class = serializers.OurWeaponSerializer


@method_decorator(cache_page(60 * 30), name="dispatch")
class TeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.TeamMember.objects.all()
    serializer_class = serializers.TeamMemberSerializer


@method_decorator(cache_page(60 * 30), name="dispatch")
class ConstantElementViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.ConstantElement.objects.all()
    serializer_class = serializers.ConstantElementSerializer

    @action(detail=False)
    def links(self, request):
        queryset = self.get_queryset().filter(link__isnull=False)
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class HomePageView(TemplateView):
    template_name = "index_react.html"

    def get_context_data(self, **kwargs):
        return {"site": Site.objects.get_current()}
