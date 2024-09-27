from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=50)
    color = models.CharField(max_length=7)
    textColor = models.CharField(max_length=7)

    def __str__(self):
        return self.name


class Post(models.Model):
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    content = models.TextField()
    dateCreated = models.DateTimeField(auto_now_add=True)
    photoCover = models.ImageField(upload_to='post-covers/', default='default.png')

    def __str__(self):
        return self.title
    
    def image(self):
        return 'http://localhost:8000/uploads/%s' % self.photoCover
    
    class Meta:
        ordering = ['-dateCreated']