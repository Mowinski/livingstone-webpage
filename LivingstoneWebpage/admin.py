from django.contrib import admin
from django.utils.html import format_html

from LivingstoneWebpage import models


class GalleryImageAdmin(admin.ModelAdmin):
    def image_tag(self, obj):
        return format_html(f'<img src="{obj.image.url}" style="max-width: 100px"/>')

    def get_changeform_initial_data(self, request):
        return {"order": models.GalleryImage.get_highest_order() + 1}

    image_tag.short_description = "Image"
    list_display = ["name", "image_tag", "order"]
    readonly_fields = ["image_tag"]


admin.site.register(models.GalleryImage, GalleryImageAdmin)
admin.site.register(models.OurWeapon)
admin.site.register(models.ConstantElement)
admin.site.register(models.TeamMember)
admin.site.register(models.SeoMetaData)
