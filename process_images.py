import os
from PIL import Image

output_dir = "public/assets"
os.makedirs(output_dir, exist_ok=True)

raw_dir = "public/images"

def save_clean(src_name, target_name):
    src_path = os.path.join(raw_dir, src_name)
    target_path = os.path.join(output_dir, target_name)
    try:
        with Image.open(src_path) as img:
            if img.mode in ("RGBA", "LA") and (target_name.endswith(".jpg") or target_name.endswith(".jpeg")):
                bg = Image.new("RGB", img.size, (255, 255, 255))
                bg.paste(img, mask=img.split()[-1])
                bg.save(target_path, "JPEG", quality=92)
            else:
                img.save(target_path)
            print(f"Saved: {target_path} (size={img.size})")
    except Exception as e:
        print(f"Failed {src_name} -> {target_name}: {e}")

# Mapping of images
mapping = {
    # Logo
    "page_1_img_1_Im0.jpg": "wakisha-logo.jpg",
    # Hero lamp
    "page_1_img_3_Im2.jpg": "hero-creative-lamp.jpg",
    # Solar Engineers (Intro / About)
    "page_2_img_1_Im0.jpg": "solar-engineers-team.jpg",
    # Services / Construction
    "page_4_img_1_Im0.jpg": "construction-supervision.jpg",
    # Complete Projects (Slide 5)
    "page_5_img_1_Im0.jpg": "project-utawala-solar.jpg",
    "page_5_img_2_Im1.jpg": "project-wajir-fence-1.jpg",
    "page_5_img_3_Im2.jpg": "project-hayat-hotel-staircase.jpg",
    "page_5_img_4_Im3.jpg": "project-kitchen-automation.jpg",
    "page_5_img_5_Im4.jpg": "project-erita-jewellery.jpg",
    "page_5_img_7_Im6.jpg": "project-wajir-fence-2.jpg",
    "page_5_img_8_Im7.jp2": "project-hayat-hotel-room.png",
    # Consulting & Engineering (Slide 6)
    "page_6_img_1_Im0.jp2": "consulting-professional.png",
    "page_6_img_2_Im1.jp2": "engineering-analytics-meeting.png",
    # Contact & Partnership (Slide 8)
    "page_8_img_2_Im1.jpg": "business-handshake.jpg",
    # Innovation (Slide 9)
    "page_9_img_2_Im1.jpg": "digital-innovation.jpg",
}

for src, target in mapping.items():
    save_clean(src, target)

print("Image processing complete!")
