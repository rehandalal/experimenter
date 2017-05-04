# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-05-03 18:33
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('experiments', '0003_experiment_analysis'),
    ]

    operations = [
        migrations.AlterField(
            model_name='experimentvariant',
            name='name',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='experimentvariant',
            name='slug',
            field=models.SlugField(max_length=255),
        ),
        migrations.AlterUniqueTogether(
            name='experimentvariant',
            unique_together=set([('slug', 'experiment')]),
        ),
    ]