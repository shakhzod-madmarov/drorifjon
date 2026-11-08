import re

with open('c:/projects/drorifjon.uz/frontend/public/business-card-print-90x50.html', 'r', encoding='utf-8') as f:
    single_html = f.read()

# Extract styles
styles_match = re.search(r'<style>([\s\S]+?)</style>', single_html)
styles = styles_match.group(1)

# Extract Back Page inner HTML (SVG + card-content)
back_page_match = re.search(r'<!-- PAGE 2: BACK -->\s*<div class="card-page">\s*([\s\S]+?)\s*</div>\s*</body>', single_html)
back_cell_content = back_page_match.group(1)

a4_html = f'''<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="UTF-8">
  <title>Vizitka A4 Sheet (10 dona)</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}

    @page {{
      size: A4 portrait;
      margin: 0;
    }}

    body {{
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      margin: 0;
      padding: 0;
      background: #FFFFFF;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
      width: 210mm;
      height: 297mm;
    }}

    .sheet-page {{
      width: 210mm;
      height: 297mm;
      position: relative;
      padding-top: 23.5mm;
      padding-left: 15mm;
      page-break-after: always;
      page-break-inside: avoid;
    }}

    .grid-container {{
      display: grid;
      grid-template-columns: repeat(2, 90mm);
      grid-template-rows: repeat(5, 50mm);
      width: 180mm;
      height: 250mm;
    }}

    .card-cell {{
      width: 90mm;
      height: 50mm;
      position: relative;
      overflow: hidden;
      outline: 0.15mm dashed #CBD5E1;
    }}

    .guide-label {{
      position: absolute;
      top: 8mm;
      left: 15mm;
      font-size: 8pt;
      font-weight: 700;
      color: #64748B;
      letter-spacing: 0.3mm;
    }}

{styles}
  </style>
</head>
<body>

  <div class="sheet-page">
    <div class="guide-label">STOMATOLOG ORIFJON — 10 DONA VIZITKA (90x50mm) · A4 CHOP VARAQI</div>
    <div class="grid-container">
'''

for i in range(10):
    a4_html += f'      <div class="card-cell">\n        {back_cell_content}\n      </div>\n'

a4_html += '''    </div>
  </div>

</body>
</html>
'''

with open('c:/projects/drorifjon.uz/frontend/public/business-card-a4-sheet.html', 'w', encoding='utf-8') as f:
    f.write(a4_html)

print('Updated business-card-a4-sheet.html successfully!')
