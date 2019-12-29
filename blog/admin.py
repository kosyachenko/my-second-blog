from django.contrib import admin
from .models import Post, Comment

# Register your models here.
#admin.site.register(Post)
admin.site.register(Comment)

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'created_date')
    list_filter = ('published_date', 'created_date', 'author')
    search_fields = ('title', 'body')
    #prepopulated_fields = {'slug': ('title',)}
    raw_id_fields = ('author',)
    date_hierarchy = 'publish'
    ordering = ('published_date')

