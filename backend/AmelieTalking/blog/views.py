from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import PostSerializer, CategorySerializer
from .models import Post, Category

class PostList(APIView):
    def get(self, request, format=None):
        posts = Post.objects.order_by("-dateCreated")[1:6]
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class PostDetail(APIView):
    def get(self, request, post_id, format=None):
        post = get_object_or_404(Post, pk=post_id)
        serializer = PostSerializer(post)
        return Response(serializer.data)
    

class MostRecent(APIView):
    def get(self, request, format=None):
        post = Post.objects.order_by("-dateCreated")[0]
        serializer = PostSerializer(post)
        return Response(serializer.data)
    

class CategoriesList(APIView):
    def get(self, request, format=None):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)