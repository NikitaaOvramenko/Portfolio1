mkdir -p output

for file in *.mp4; do
    echo "Processing file $file"
    ffmpeg -i "$file" -vf "fps=15,scale=720:-1:flags=lanczos" -loop 0 -c:v libwebp -q:v 70 -preset picture "output/${file%.mp4}.webp"
done
