import os
from PIL import Image

MEDIA_DIR = os.path.abspath('public/media')

TARGETS = [
    'antho_lookbook',
    'antho_shop',
    'antho_collections',
    'antho_editorial',
    'news_insights_tech',
    'news_insights_politics',
    'news_insights_business',
    'news_insights_world',
    'reavo_shop',
    'reavo_apple',
    'reavo_cart',
    'reavo_accessories',
]

MAX_WIDTH = 1920

print(f"Compressing screenshots in {MEDIA_DIR}...")

for name in TARGETS:
    png_path = os.path.join(MEDIA_DIR, f"{name}.png")
    if not os.path.exists(png_path):
        print(f"Skipping {name}, PNG not found.")
        continue

    orig_size_kb = os.path.getsize(png_path) / 1024

    with Image.open(png_path) as img:
        # Convert RGBA to RGB if saving as JPEG
        rgb_img = img.convert('RGB')
        
        # Resize if width exceeds MAX_WIDTH
        if rgb_img.width > MAX_WIDTH:
            new_height = int((MAX_WIDTH / rgb_img.width) * rgb_img.height)
            rgb_img = rgb_img.resize((MAX_WIDTH, new_height), Image.Resampling.LANCZOS)

        # Save WebP
        webp_path = os.path.join(MEDIA_DIR, f"{name}.webp")
        rgb_img.save(webp_path, 'WEBP', quality=85, method=6)
        webp_size_kb = os.path.getsize(webp_path) / 1024

        # Save JPG
        jpg_path = os.path.join(MEDIA_DIR, f"{name}.jpg")
        rgb_img.save(jpg_path, 'JPEG', quality=85, optimize=True)
        jpg_size_kb = os.path.getsize(jpg_path) / 1024

        print(f"[OK] {name}: PNG {orig_size_kb:.1f} KB -> WebP {webp_size_kb:.1f} KB ({100 - (webp_size_kb/orig_size_kb*100):.1f}% reduction) | JPG {jpg_size_kb:.1f} KB")

print("\nDone compressing all screenshots!")
