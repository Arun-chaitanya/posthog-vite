# Generated by Django 3.0.7 on 2020-07-31 13:23

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("posthog", "0077_cohortpeople_id_to_bigautofield"),
    ]

    operations = [
        migrations.AddField(
            model_name="dashboarditem",
            name="created_at",
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
        migrations.AddField(
            model_name="dashboarditem",
            name="created_by",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.AddField(
            model_name="dashboarditem",
            name="saved",
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name="dashboarditem",
            name="dashboard",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="items",
                to="posthog.Dashboard",
            ),
        ),
    ]