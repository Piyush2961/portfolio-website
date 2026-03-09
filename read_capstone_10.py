import sys
import subprocess
try:
    import pypdf
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
    import pypdf

f = 'assets/Capstone_Project_10.pdf'
try:
    reader = pypdf.PdfReader(f)
    text = "".join([page.extract_text() or "" for page in reader.pages])
    print(f"\n\n=== {f} ===\n")
    print(text[:1500])
except Exception as e:
    print(f"Error reading {f}: {e}")
