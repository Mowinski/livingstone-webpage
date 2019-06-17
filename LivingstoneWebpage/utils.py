import io
import sys

from django.core.files.uploadedfile import InMemoryUploadedFile
from PIL import Image


def save_to_webp(image):
    img = Image.open(io.BytesIO(image.read()))
    if img.mode != "RGB":
        img = img.convert("RGB")
    output = io.BytesIO()
    img.save(output, format="WEBP", quality=100, method=6, lossless=True)
    output.seek(0)
    filename = "{}.webp".format(image.name.split(".")[0])
    return InMemoryUploadedFile(
        output, "ImageField", filename, "image/webp", sys.getsizeof(output), None
    )
