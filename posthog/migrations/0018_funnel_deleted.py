# Generated by Django 2.2.7 on 2020-02-09 06:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("posthog", "0017_dashboarditem"),
    ]

    operations = [
        migrations.AddField(
            model_name="funnel",
            name="deleted",
            field=models.BooleanField(default=False),
        ),
    ]