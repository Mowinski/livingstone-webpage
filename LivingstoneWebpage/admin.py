from django.contrib import admin
from django.db.models import F
from django.utils.html import format_html

from LivingstoneWebpage import models


class MoveUpDownMixin:
    actions = ["move_up", "move_down"]

    def move_up(self, request, queryset):
        queryset.update(order=F("order") - 1)

    def move_down(self, request, queryset):
        queryset.update(order=F("order") + 1)

    move_up.short_description = "Move one position up"
    move_down.short_description = "Move one position down"


class GalleryImageAdmin(MoveUpDownMixin, admin.ModelAdmin):
    def image_tag(self, obj):
        return format_html(f'<img src="{obj.image.url}" style="max-width: 100px"/>')

    def get_changeform_initial_data(self, request):
        return {"order": models.GalleryImage.get_highest_order() + 1}

    image_tag.short_description = "Image"
    list_display = ["name", "image_tag", "order", "span"]
    readonly_fields = ["image_tag"]


class TeamMemberAdmin(MoveUpDownMixin, admin.ModelAdmin):
    def image_tag(self, obj):
        return format_html(f'<img src="{obj.avatar.url}" style="max-width: 100px"/>')

    def get_changeform_initial_data(self, request):
        return {"order": models.TeamMember.get_highest_order() + 1}

    image_tag.short_description = "Avatar"
    list_display = ["name", "image_tag", "position", "order", "span"]
    readonly_fields = ["image_tag"]


class OurWeaponAdmin(MoveUpDownMixin, admin.ModelAdmin):
    def image_tag(self, obj):
        return format_html(f'<img src="{obj.image.url}" style="max-width: 100px"/>')

    def get_changeform_initial_data(self, request):
        return {"order": models.OurWeapon.get_highest_order() + 1}

    image_tag.short_description = "Image"
    list_display = ["name", "image_tag", "order", "span"]
    readonly_fields = ["image_tag"]


admin.site.register(models.GalleryImage, GalleryImageAdmin)
admin.site.register(models.OurWeapon, OurWeaponAdmin)
admin.site.register(models.ConstantElement)
admin.site.register(models.PositionName)
admin.site.register(models.TeamMember, TeamMemberAdmin)
admin.site.register(models.SeoMetaData)
