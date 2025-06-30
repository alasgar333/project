import os
from PIL import Image

from django.core.exceptions import ValidationError

def valid_image_extension(value):
    ext = os.path.splitext(value.name)[1]
    exsten_valid = ['.png', '.jpeg', '.gif', '.jpg']

    if not ext.lower() in exsten_valid:
        raise ValidationError(
            f"Unsupported file"
        )
    
def valid_size(image):
    if image:
        with Image.open(image) as img:
            if img.width > 1920 or img.height > 1080:
                raise ValidationError(
                    f"maxisumum olcunu duz gotur 1920x1080" 
                )