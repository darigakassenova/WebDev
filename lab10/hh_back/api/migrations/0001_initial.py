# Generated by Django 4.2 on 2023-04-28 09:47

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Company",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("description", models.TextField()),
                ("city", models.CharField(max_length=255)),
                ("address", models.TextField()),
            ],
            options={"verbose_name": "Company", "verbose_name_plural": "Companies",},
        ),
        migrations.CreateModel(
            name="Vacancy",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("description", models.TextField()),
                ("salary", models.FloatField()),
                (
                    "company",
                    models.ForeignKey(
                        default=1,
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="vacancies",
                        to="api.company",
                    ),
                ),
            ],
            options={"verbose_name": "Vacancy", "verbose_name_plural": "Vacancies",},
        ),
    ]