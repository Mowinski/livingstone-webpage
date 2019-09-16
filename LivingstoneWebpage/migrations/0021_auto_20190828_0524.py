# Generated by Django 2.2.4 on 2019-08-28 05:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LivingstoneWebpage', '0020_auto_20190828_0435'),
    ]

    operations = [
        migrations.AlterField(
            model_name='constantelement',
            name='key',
            field=models.CharField(max_length=50, primary_key=True, serialize=False, verbose_name='Key'),
        ),
        migrations.AlterUniqueTogether(
            name='constantelement',
            unique_together={('key', 'uuid')},
        ),
    ]