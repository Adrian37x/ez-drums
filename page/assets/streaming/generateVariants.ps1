# Create output directory 'dash' (if not exists)
$OUTPUT_DIR = "dash"
if(!(Test-Path -Path $OUTPUT_DIR )){
    New-Item -ItemType directory -Path $OUTPUT_DIR
    Write-Host "Created new directory '${OUTPUT_DIR}''"
}

# Define sizes for video variants.
# Format: width:height:bitrate
$SIZES = "240:135:1k","480:270:2k","640:360:100k","960:540:500k","1280:720:1000k","1920:1080:3500k"

$counter = 0
$manifest_inputs = [System.Collections.ArrayList]@()
$map = [System.Collections.ArrayList]@()

# Loop over all defined SIZES to generate a video variant
foreach ($size in $SIZES)
{
    # Extract width, height and bitrate from string
    $width,$height,$bitrate = $size.split(':')
    
    # Generate filename
    $filename = "dash/${width}x${height}-30-${bitrate}.webm"
    
    & ffmpeg `
        -hide_banner `
        -i original.mp4 `
        -c:v libvpx-vp9 `
        -row-mt 1 `
        -keyint_min 60 `
        -g 60 `
        -tile-columns 4 `
        -frame-parallel 1 `
        -movflags faststart `
        -f webm `
        -dash 1 `
        -speed 3 `
        -threads 4 `
        -an `
        -b:v $bitrate `
        -r 30 `
        -dash 1 `
        "${filename}"
        
    # Update variables for manifest generation
    [void]$manifest_inputs.Add("-f")
    [void]$manifest_inputs.Add("webm_dash_manifest")
    [void]$manifest_inputs.Add("-i")
    [void]$manifest_inputs.Add($filename)
    
    [void]$map.Add("-map")
    [void]$map.Add($counter)
    
    $counter++
}

# Generate comma separated list of video stream indices
$videoStreams = 0..($counter-1)
$videoStreamIndices = $videoStreams -join ','

# Generate audio variant
& ffmpeg `
    -hide_banner `
    -i original.mp4 `
    -c:a libvorbis `
    -b:a 192k `
    -vn `
    -f webm `
    -dash 1 `
    dash/audio.webm
    
# Add audio variant to mapped streams
[void]$map.Add("-map")
[void]$map.Add($counter)
    
# Generate dash manifest
& ffmpeg `
    @manifest_inputs `
    -f webm_dash_manifest -i dash/audio.webm `
    -c copy `
    @map `
    -f webm_dash_manifest `
    -adaptation_sets "id=0,streams=${videoStreamIndices} id=1,streams=${counter}" `
    dash/manifest.mpd 