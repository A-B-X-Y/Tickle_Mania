let anchors = document.querySelectorAll('div .btn');
    let links = [...anchors];
    
    for (let i=0; i<links.length; i++) {
        links[i].onclick = handler;
    }
    function handler(e) {
        e.preventDefault();
        let videotarget = this.getAttribute("href");
        let filename = videotarget.substr(0, videotarget.lastIndexOf('.'));
        let video = document.getElementById("player");
        video.removeAttribute("poster");
        let source = document.querySelectorAll("#video_player video source");
        source[0].src = filename + ".mp4";
        source[1].src = filename + ".m4v";
        video.load();
        video.play();
    }

        
    document.addEventListener('DOMContentLoaded', () => {
    
        const controls = [
            'play-large', // The large play button in the center
            //'restart', // Restart playback
            'rewind', // Rewind by the seek time (default 10 seconds)
            'play', // Play/pause playback
            'fast-forward', // Fast forward by the seek time (default 10 seconds)
            'progress', // The progress bar and scrubber for playback and buffering
            'current-time', // The current time of playback
            'duration', // The full duration of the media
            'mute', // Toggle mute
            'volume', // Volume control
            'captions', // Toggle captions
            'settings', // Settings menu
            'pip', // Picture-in-picture (currently Safari only)
            'share',
            'airplay', // Airplay (currently Safari only)
            //'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
            'fullscreen' // Toggle fullscreen
        ];

        const player = Plyr.setup('#player', { controls});
 });