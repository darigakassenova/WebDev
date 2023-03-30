from pyexpat import model
from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price
        }

class Category(models.Model):
    name = models.CharField(max_length=255)
    price = models.FloatField(default=1000)

    
