# Generated by Django 2.0 on 2018-01-04 06:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('teams', '0004_auto_20171227_0618'),
        ('challenges', '0002_challenge_points'),
    ]

    operations = [
        migrations.AddField(
            model_name='challenge',
            name='solved',
            field=models.ForeignKey(default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='solved_challenges', to='teams.Team'),
        ),
    ]