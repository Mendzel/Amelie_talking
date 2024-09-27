from rest_framework import routers,serializers,viewsets

from .models import Post, Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'color', 'textColor']


class PostSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Post
        fields = ['id', 'title', 'description', 'category', 'dateCreated', 'image', 'content']