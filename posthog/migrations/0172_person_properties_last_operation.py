# Generated by Django 3.1.12 on 2021-10-05 12:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("posthog", "0171_cohort_description"),
    ]

    operations = [
        migrations.AddField(
            model_name="person",
            name="properties_last_operation",
            field=models.JSONField(blank=True, null=True),
        ),
    ]
