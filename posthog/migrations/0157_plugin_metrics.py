# Generated by Django 3.1.8 on 2021-06-21 17:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("posthog", "0156_insight_short_id"),
    ]

    operations = [
        migrations.AddField(
            model_name="plugin",
            name="metrics",
            field=models.JSONField(default=dict, null=True),
        ),
    ]