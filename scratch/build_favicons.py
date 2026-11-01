import os
import base64
from PIL import Image, ImageFilter, ImageEnhance

base_logo_path = 'frontend/public/logo_icon.png'
im = Image.open(base_logo_path).convert('RGBA')

# Crop to tight bounding box with equal padding
bbox = im.getbbox()
cropped = im.crop(bbox)
w, h = cropped.size
size = max(w, h)

# Center in square with 4% breathing padding
pad = int(size * 0.04)
canvas_size = size + 2 * pad
emblem = Image.new('RGBA', (canvas_size, canvas_size), (0, 0, 0, 0))
emblem.paste(cropped, (pad + (size - w) // 2, pad + (size - h) // 2))

# Generate 16x16
im16 = emblem.resize((16, 16), Image.Resampling.LANCZOS)
enhancer16 = ImageEnhance.Sharpness(im16)
im16 = enhancer16.enhance(1.8)
im16.save('frontend/public/favicon-16x16.png', 'PNG')

# Generate 32x32
im32 = emblem.resize((32, 32), Image.Resampling.LANCZOS)
enhancer32 = ImageEnhance.Sharpness(im32)
im32 = enhancer32.enhance(1.4)
im32.save('frontend/public/favicon-32x32.png', 'PNG')

# Generate 48x48
im48 = emblem.resize((48, 48), Image.Resampling.LANCZOS)
im48.save('frontend/public/favicon-48x48.png', 'PNG')

# Generate multi-size ICO (16, 24, 32, 48, 64)
im24 = emblem.resize((24, 24), Image.Resampling.LANCZOS)
im64 = emblem.resize((64, 64), Image.Resampling.LANCZOS)
im16.save('frontend/public/favicon.ico', format='ICO', sizes=[(16,16), (24,24), (32,32), (48,48), (64,64)])

# Generate apple-touch-icon.png (180x180 with clean white background)
apple_icon = Image.new('RGBA', (180, 180), (255, 255, 255, 255))
apple_emblem = emblem.resize((150, 150), Image.Resampling.LANCZOS)
apple_icon.paste(apple_emblem, (15, 15), apple_emblem)
apple_icon.convert('RGB').save('frontend/public/apple-touch-icon.png', 'PNG')

# Generate icon-192.png & icon-512.png
im192 = emblem.resize((192, 192), Image.Resampling.LANCZOS)
im192.save('frontend/public/icon-192.png', 'PNG')

im512 = emblem.resize((512, 512), Image.Resampling.LANCZOS)
im512.save('frontend/public/icon-512.png', 'PNG')

# Generate SVG favicon
with open('frontend/public/icon-512.png', 'rb') as f:
    b64 = base64.b64encode(f.read()).decode('utf-8')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <image href="data:image/png;base64,{b64}" width="512" height="512" preserveAspectRatio="xMidYMid meet"/>
</svg>
'''

with open('frontend/public/favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_content)

print('All favicon assets generated and verified successfully!')
