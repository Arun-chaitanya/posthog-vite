# Generated by Django 2.2.7 on 2020-01-27 00:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("posthog", "0008_action_actionstep"),
    ]

    operations = [
        migrations.RenameField(
            model_name="element",
            old_name="el_text",
            new_name="text",
        ),
    ]