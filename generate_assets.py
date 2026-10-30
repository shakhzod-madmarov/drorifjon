import os
from PIL import Image, ImageDraw, ImageFont

frontend_dir = r'c:\projects\drorifjon.uz\frontend'
public_dir = os.path.join(frontend_dir, 'public')
src_assets_dir = os.path.join(frontend_dir, 'src', 'assets')

os.makedirs(public_dir, exist_ok=True)
os.makedirs(src_assets_dir, exist_ok=True)

# Brand colors from prompt: FF9D50, FFF9D8, 1DCED8, 55E07E
ORANGE = (255, 157, 80)     # #FF9D50
CREAM = (255, 249, 216)     # #FFF9D8
CYAN = (29, 206, 216)       # #1DCED8
GREEN = (85, 224, 126)      # #55E07E
DARK = (20, 30, 40)         # Slate charcoal
MUTED = (90, 105, 120)

try:
    font_large = ImageFont.truetype('arialbd.ttf', 44)
    font_med = ImageFont.truetype('arialbd.ttf', 26)
    font_sub = ImageFont.truetype('arial.ttf', 20)
    font_badge = ImageFont.truetype('arialbd.ttf', 17)
except Exception:
    font_large = font_med = font_sub = font_badge = ImageFont.load_default()

# 1. Generate dr_orifjon_og.jpg (1200 x 630)
og_w, og_h = 1200, 630
og = Image.new('RGB', (og_w, og_h), CREAM)
draw = ImageDraw.Draw(og)

# Top & bottom brand lines
for i in range(12):
    draw.line([(0, i), (400, i)], fill=ORANGE, width=1)
    draw.line([(400, i), (800, i)], fill=CYAN, width=1)
    draw.line([(800, i), (1200, i)], fill=GREEN, width=1)

draw.rounded_rectangle([25, 25, og_w - 25, og_h - 25], radius=24, outline=(235, 220, 185), width=2)

full_logo_path = os.path.join(public_dir, 'logo.png')
full_logo = Image.open(full_logo_path).convert('RGBA').resize((460, 460), Image.Resampling.LANCZOS)
og.paste(full_logo, (60, (og_h - 460) // 2), full_logo)

tx = 560
draw.rounded_rectangle([tx, 90, tx + 240, 126], radius=18, fill=ORANGE)
draw.text((tx + 20, 98), 'VRACH STOMATOLOG', font=font_badge, fill=(255, 255, 255))

draw.text((tx, 145), 'DR. MANSUROV O.A.', font=font_large, fill=DARK)
draw.text((tx, 205), 'Mansurov Orifjon Alimbekovich', font=font_med, fill=(210, 110, 40))

draw.line([(tx, 255), (tx + 580, 255)], fill=CYAN, width=3)

draw.text((tx, 275), 'Andijon Tibbiyot Kolleji (2001 - 2004)', font=font_sub, fill=DARK)
draw.text((tx, 310), 'Osh Davlat Universiteti (2017 - 2022)', font=font_sub, fill=DARK)
draw.text((tx, 345), '20+ Yillik Tibbiyot Sohasidagi Tajriba', font=font_sub, fill=MUTED)

# Contact badge section
draw.rounded_rectangle([tx, 400, tx + 580, 520], radius=16, fill=(255, 255, 255), outline=CYAN, width=2)
draw.text((tx + 25, 420), 'Tel: +998 90 548 10 90', font=font_med, fill=DARK)
draw.text((tx + 25, 465), 'Telegram: @dr_orifjon_1   |   Instagram: @dr_orifjon', font=font_sub, fill=(0, 130, 160))

for i in range(og_h - 12, og_h):
    draw.line([(0, i), (400, i)], fill=GREEN, width=1)
    draw.line([(400, i), (800, i)], fill=CYAN, width=1)
    draw.line([(800, i), (1200, i)], fill=ORANGE, width=1)

og.save(os.path.join(public_dir, 'dr_orifjon_og.jpg'), 'JPEG', quality=95)
print('dr_orifjon_og.jpg created!')

# 2. Generate dr_orifjon_portrait_pro (800 x 900) for Doctor3DCard
card_w, card_h = 800, 900
card = Image.new('RGB', (card_w, card_h), CREAM)
cdraw = ImageDraw.Draw(card)

# Subtle radial warm background
for r in range(380, 50, -12):
    factor = r / 380.0
    c_col = (
        int(CREAM[0] + (255 - CREAM[0]) * factor),
        int(CREAM[1] + (255 - CREAM[1]) * factor),
        int(CREAM[2] + (255 - CREAM[2]) * factor),
    )
    cdraw.ellipse([card_w//2 - r, 380 - r, card_w//2 + r, 380 + r], fill=c_col)

card_logo = full_logo.resize((560, 560), Image.Resampling.LANCZOS)
card.paste(card_logo, ((card_w - 560)//2, 70), card_logo)

# Bottom credentials plate
cdraw.rounded_rectangle([50, 680, card_w - 50, 840], radius=22, fill=(255, 255, 255), outline=ORANGE, width=2)
cdraw.text((90, 705), 'Mansurov Orifjon Alimbekovich', font=font_med, fill=DARK)
cdraw.text((90, 745), 'Andijon Tibbiyot Kolleji (2001-2004) | Osh Davlat Univ. (2017-2022)', font=ImageFont.truetype('arial.ttf', 17) if hasattr(font_sub, 'font') else font_sub, fill=MUTED)
cdraw.text((90, 785), 'Tel: +998 90 548 10 90  |  @dr_orifjon_1', font=font_badge, fill=ORANGE)

card.save(os.path.join(public_dir, 'dr_orifjon_portrait_pro.jpg'), 'JPEG', quality=95)
card.save(os.path.join(public_dir, 'dr_orifjon_portrait_pro.webp'), 'WEBP', quality=95)
card.save(os.path.join(src_assets_dir, 'dr_orifjon_portrait_pro.jpg'), 'JPEG', quality=95)
card.save(os.path.join(src_assets_dir, 'dr_orifjon_portrait_pro.webp'), 'WEBP', quality=95)
print('dr_orifjon_portrait_pro created!')
