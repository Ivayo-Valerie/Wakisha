import os
from pypdf import PdfReader

pdf_path = "wakisha website.pdf"
output_dir = "public/images"
os.makedirs(output_dir, exist_ok=True)

reader = PdfReader(pdf_path)
count = 0

for i, page in enumerate(reader.pages):
    for j, image_file_object in enumerate(page.images):
        ext = image_file_object.name.split('.')[-1]
        filename = f"page_{i+1}_img_{j+1}_{image_file_object.name}"
        out_filepath = os.path.join(output_dir, filename)
        with open(out_filepath, "wb") as fp:
            fp.write(image_file_object.data)
        print(f"Extracted: {out_filepath} ({len(image_file_object.data)} bytes)")
        count += 1

print(f"Extracted {count} images in total.")
