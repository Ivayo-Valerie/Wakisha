import os
from PIL import Image

images_dir = "public/images"
files = [f for f in os.listdir(images_dir) if os.path.isfile(os.path.join(images_dir, f))]

for f in sorted(files):
    path = os.path.join(images_dir, f)
    try:
        with Image.open(path) as img:
            print(f"{f}: format={img.format}, size={img.size}, mode={img.mode}")
    except Exception as e:
        print(f"{f}: Error opening - {e}")
