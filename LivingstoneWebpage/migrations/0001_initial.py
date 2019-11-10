# Generated by Django 2.2.7 on 2019-11-08 12:18

import django.contrib.sites.managers
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django.db.models.manager
import thumbnails.fields
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('sites', '0002_alter_domain_unique'),
    ]

    operations = [
        migrations.CreateModel(
            name='ContactMessage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author', models.CharField(blank=True, default=None, max_length=250, null=True, verbose_name='First and last name')),
                ('email', models.EmailField(max_length=254, verbose_name='Email address')),
                ('message', models.TextField(verbose_name='Message')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='PositionName',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Position name', max_length=100)),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='TeamMember',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('avatar', models.ImageField(upload_to='', verbose_name='Avatar')),
                ('name', models.CharField(max_length=250, verbose_name='First and last name')),
                ('order', models.IntegerField(default=0)),
                ('span', models.IntegerField(default=4, help_text='Digit between 1-12. How much space avatar should take. See bootstrap grid', validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(12)])),
                ('uuid', models.UUIDField(default=uuid.uuid4)),
                ('position', models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, to='LivingstoneWebpage.PositionName')),
                ('site', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sites.Site')),
            ],
            options={
                'ordering': ['order'],
            },
            managers=[
                ('objects', django.db.models.manager.Manager()),
                ('on_site', django.contrib.sites.managers.CurrentSiteManager()),
            ],
        ),
        migrations.CreateModel(
            name='SeoMetaData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=65, verbose_name='Head title')),
                ('description', models.CharField(max_length=160, verbose_name='Meta description')),
                ('keywords', models.CharField(max_length=1000, verbose_name='Keywords (comma separated)')),
                ('site', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='meta', to='sites.Site', verbose_name='Site')),
            ],
            managers=[
                ('objects', django.db.models.manager.Manager()),
                ('on_site', django.contrib.sites.managers.CurrentSiteManager()),
            ],
        ),
        migrations.CreateModel(
            name='OurWeapon',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='', verbose_name='Picture')),
                ('name', models.CharField(max_length=250, verbose_name='Tool name')),
                ('order', models.IntegerField(default=0)),
                ('span', models.IntegerField(default=4, help_text='Digit between 1-12. How much space avatar should take. See bootstrap grid', validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(12)])),
                ('uuid', models.UUIDField(default=uuid.uuid4)),
                ('site', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sites.Site')),
            ],
            options={
                'ordering': ['order'],
            },
            managers=[
                ('objects', django.db.models.manager.Manager()),
                ('on_site', django.contrib.sites.managers.CurrentSiteManager()),
            ],
        ),
        migrations.CreateModel(
            name='GalleryImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', thumbnails.fields.ImageField(help_text='size 900x700 px (square size 300x175px)', upload_to='', verbose_name='Picture')),
                ('name', models.CharField(help_text='Max 25 characters', max_length=25, verbose_name='Picture name')),
                ('description', models.TextField(blank=True, default=None, help_text='Max 250 characters', max_length=250, null=True, verbose_name='Description')),
                ('span', models.IntegerField(default=4, help_text='Digit between 1-12. How much space image should take. See bootstrap grid', validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(12)])),
                ('order', models.IntegerField(default=0)),
                ('uuid', models.UUIDField(default=uuid.uuid4)),
                ('site', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sites.Site')),
            ],
            options={
                'ordering': ['order'],
            },
            managers=[
                ('objects', django.db.models.manager.Manager()),
                ('on_site', django.contrib.sites.managers.CurrentSiteManager()),
            ],
        ),
        migrations.CreateModel(
            name='ConstantElement',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('key', models.CharField(max_length=50, verbose_name='Key')),
                ('text', models.TextField(blank=True, default=None, null=True, verbose_name='Text')),
                ('image', models.ImageField(blank=True, default=None, help_text='About image: 1900x710px', null=True, upload_to='', verbose_name='Picture')),
                ('link', models.URLField(blank=True, default=None, null=True, verbose_name='Link')),
                ('uuid', models.UUIDField(default=uuid.uuid4)),
                ('site', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sites.Site')),
            ],
            options={
                'unique_together': {('key', 'uuid', 'site')},
            },
            managers=[
                ('objects', django.db.models.manager.Manager()),
                ('on_site', django.contrib.sites.managers.CurrentSiteManager()),
            ],
        ),
    ]
