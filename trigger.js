
function trigger(targetname, func) {

    var trig = document.getElementById(targetname)

    e = window.event

    posX = e.clientX
    posY = e.clientY

    // console.log(posX, posY)

    var rect = trig.getBoundingClientRect()

    // console.log(rect.top, rect.right, rect.bottom, rect.left);

    if (posX >= rect.left && posX < rect.right && posY >= rect.top && posY < rect.bottom) {

        if (mousedown == false) {
            return
        }

        func()

    }
}
