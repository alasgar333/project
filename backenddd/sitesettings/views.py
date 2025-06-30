from django.shortcuts import render
from rest_framework import  serializers, viewsets
from .models import Slider, SocialMedia
from rest_framework.response import Response
from .serializer import SliderSerializer, SocicalMediaSerializer

class SocialMediaViewSet(viewsets.ModelViewSet):
    """ Alasgarof """
    queryset = SocialMedia.objects.all()
    serializer_class = SocicalMediaSerializer
    http_method_names=['get']


class SliderViewSet(viewsets.ModelViewSet):
    """ Alasgarof """
    queryset = Slider.objects.all()
    serializer_class = SliderSerializer
    http_method_names=['get']

    