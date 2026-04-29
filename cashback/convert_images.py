from PIL import Image
import os

def convert_to_webp(source_path, target_path):
    with Image.open(source_path) as img:
        img.save(target_path, "WEBP")
    print(f"Converted {source_path} to {target_path}")

def convert_all_images_in_directory(directory):
    for filename in os.listdir(directory):
        if filename.lower().endswith((".jpg", ".jpeg", ".png", ".bmp", ".tiff")):
            source_path = os.path.join(directory, filename)
            target_path = os.path.splitext(source_path)[0] + ".webp"
            convert_to_webp(source_path, target_path)

if __name__ == "__main__":
    directory = r"c:\\Users\\user\\Desktop\\acard"
    convert_all_images_in_directory(directory)
