from django.urls import path

from . import views

app_name = "blog" #dunno if needed

urlpatterns = [
    path("posts", views.PostList.as_view(), name="posts"),
    path("posts/<int:post_id>/", views.PostDetail.as_view(), name="post"),
    path("posts/most_recent/", views.MostRecent.as_view(), name="most_recent"),

    path("categories/", views.CategoriesList.as_view(), name="categories"),
]