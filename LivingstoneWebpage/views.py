from django.contrib.sites.models import Site
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page

from LivingstoneWebpage import models, serializers

from django.views.generic import TemplateView
from rest_framework import viewsets


class GalleryImageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.GalleryImage.objects.all()
    serializer_class = serializers.GalleryImageSerializer


class OurWeaponViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.OurWeapon.objects.all()
    serializer_class = serializers.OurWeaponSerializer


class TeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.TeamMember.objects.all()
    serializer_class = serializers.TeamMemberSerializer


class ConstantElementViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.ConstantElement.objects.all()
    serializer_class = serializers.ConstantElementSerializer


@method_decorator(cache_page(60 * 30), name="dispatch")
class HomePageView(TemplateView):
    template_name = "index_react.html"

    def get_context_data(self, **kwargs):
        return {"site": Site.objects.get_current()}
