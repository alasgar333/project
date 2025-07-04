from django.shortcuts import render
from django.urls import path, include
from django.contrib.auth.models import User
from rest_framework import  serializers, viewsets
from .models import Category, Brand, Product
from rest_framework.response import Response
from .serializer import CategorySerializer,BrandSerializer, ProductSerializer
from .schema import category_doc

class CategoryViewSet(viewsets.ModelViewSet):
    """ Alasgarof """
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    http_method_names=['get']

    @category_doc

    def list(self, request):
        slug = request.query_params.get("slug")
        if slug:
            self.queryset = self.queryset.filter(slug=slug)

        serializer = self.get_serializer(self.queryset, many=True)
        return Response(serializer.data)



class BrandViewSet(viewsets.ModelViewSet):
    """ Alasgarof """
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    http_method_names=['get']

    

    def list(self, request):
        slug = request.query_params.get("slug")
        if slug:
            self.queryset = self.queryset.filter(slug=slug)

        serializer = self.get_serializer(self.queryset, many=True)
        return Response(serializer.data)

class ProductViewSet(viewsets.ModelViewSet):
    """ Alasgarof """
    queryset = Product.objects.all() 
    http_method_names=['get']

    

    def list(self, request):
        slug = request.query_params.get("slug")
        category_id = request.query_params.get("category")
        brand_id= request.query_params.get("brand")
        min_price = request.query_params.get("min_price")
        max_price = request.query_params.get("max_price")
        avaible = request.query_params.get("avaible")
        is_top = request.query_params.get("is_top")
        qty = request.query_params.get("qty")
        size = request.query_params.get("size")
        title = request.query_params.get("title")
        raiting = request.query_params.get("raiting")


        if slug:
            self.queryset = self.queryset.filter(slug = slug)
        if category_id:
                self.queryset = self.queryset.filter(category = category_id)
        if brand_id:
                self.queryset = self.queryset.filter(brand = brand_id)
        if min_price:
                self.queryset = self.queryset.filter(price__gte=min_price)
        if max_price:
                self.queryset = self.queryset.filter(price__lte=max_price)
        if avaible:
                avaible=avaible.lower()=="true"
                self.queryset = self.queryset.filter(avaiable=avaible)
        if is_top:
                is_top=is_top.lower()=="true"
                self.queryset = self.queryset.filter(is_top=is_top)
        if qty:             
                self.queryset = self.queryset[:int(qty)]
        if size:
                self.queryset = self.queryset.filter(size=size)
        if title:
                self.queryset = self.queryset.filter(title__icontains=title)
        if raiting:
                self.queryset = self.queryset.filter(raiting=raiting)

        
        serializer =ProductSerializer(self.queryset, many=True)
        return Response(serializer.data)

