from rest_framework import serializers
from .models import Slider, SocialMedia

class SliderSerializer(serializers.ModelSerializer):
    product_count = serializers.SerializerMethodField()
    class Meta:
        model = Slider
        fields = '__all__'


class SocicalMediaSerializer(serializers.ModelSerializer):
    product_count = serializers.SerializerMethodField()
    class Meta:
        model = SocialMedia
        fields = '__all__'