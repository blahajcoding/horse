import os
import subprocess
images = os.listdir("images")
limit = 30
count = len(images)
print(count)
while count != limit:
    link = input("🐴: ")
    count = len(images) + 1
    image = str(count) + ".jpg"
    images.append(image)
    print(images)
    subprocess.call(["curl", "-o", f"images/{image}", link ])