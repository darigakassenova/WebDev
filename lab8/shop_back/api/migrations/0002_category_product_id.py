# Generated by Django 4.1.7 on 2023-03-30 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="category",
            name="product_id",
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
    ]
