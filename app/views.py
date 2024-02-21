from .models import TestModel
from rest_framework import viewsets
from .serializer import TestModelSerializer

class TestModelViewSet(viewsets.ModelViewSet):
    serializer_class = TestModelSerializer
    queryset = TestModel.objects.all()