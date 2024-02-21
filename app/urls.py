from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from django.urls import path, include
from .views import TestModelViewSet

router = routers.DefaultRouter()

routes = router.register(r'tests', TestModelViewSet)

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title='Tests API'))
]