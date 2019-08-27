from django.core.management.base import BaseCommand
from django.contrib.sites.models import Site

from LivingstoneWebpage.models import GalleryImage, ConstantElement, OurWeapon, TeamMember, PositionName


class Command(BaseCommand):
    help = 'Closes the specified poll for voting'

    def add_arguments(self, parser):
        parser.add_argument('from_site', type=int)
        parser.add_argument('to_site', type=int)

    def handle(self, *args, **options):
        from_site = Site.objects.get(pk=int(options['from_site']))
        to_site = Site.objects.get(pk=int(options['to_site']))

        self._copy_elements(GalleryImage, from_site, to_site)
        self._copy_elements(ConstantElement, from_site, to_site)
        self._copy_elements(OurWeapon, from_site, to_site)
        self._copy_elements(TeamMember, from_site, to_site)
        self._copy_elements(PositionName, from_site, to_site)

        self.stdout.write(self.style.SUCCESS('Successfully closed poll "%s"' % to_site.domain))

    def _copy_elements(self, class_, from_site: Site, to_site: Site):
        objects = class_.objects.filter(site=from_site)

        for object in objects:
            object.pk = None
            object.site = to_site
            object.save()
