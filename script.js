var pos = 0;
        var direction = 1;
        var screenWidth = window.innerWidth;
        var divWidth = 50;
        var id = setInterval(frame, 10);

        function frame() {
            if (pos >= screenWidth - divWidth) {
                direction = -1;
            } else if (pos <= 0) {
                direction = 1;
            }

            pos += direction;
            document.getElementById("myDiv").style.left = pos + "px";
        }

        function changeColor() {
            var colors = ["red", "blue", "green", "orange", "purple"];
            var randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.getElementById("myDiv").style.backgroundColor = randomColor;
        }