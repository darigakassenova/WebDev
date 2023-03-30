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
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active,
        }

class Category(models.Model):
    name = models.CharField(max_length=255)
    product_id = models.IntegerField()
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'product_id': self.product_id
        }

    
