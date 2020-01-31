const pixelArray = []
const fireWidth = 250
const fireHeight = 200
const FIRE_SOURCE = 36


//Canvas properties
const canvas = document.getElementById("fireCanvas")
canvas.width = fireWidth
canvas.height = fireHeight

const context = canvas.getContext("2d")
const image = context.createImageData(fireWidth, fireHeight)

const fireColorPallet = [{ "r": 7, "g": 7, "b": 7 }, { "r": 31, "g": 7, "b": 7 }, { "r": 47, "g": 15, "b": 7 }, { "r": 71, "g": 15, "b": 7 }, { "r": 87, "g": 23, "b": 7 }, { "r": 103, "g": 31, "b": 7 }, { "r": 119, "g": 31, "b": 7 }, { "r": 143, "g": 39, "b": 7 }, { "r": 159, "g": 47, "b": 7 }, { "r": 175, "g": 63, "b": 7 }, { "r": 191, "g": 71, "b": 7 }, { "r": 199, "g": 71, "b": 7 }, { "r": 223, "g": 79, "b": 7 }, { "r": 223, "g": 87, "b": 7 }, { "r": 223, "g": 87, "b": 7 }, { "r": 215, "g": 95, "b": 7 }, { "r": 215, "g": 95, "b": 7 }, { "r": 215, "g": 103, "b": 15 }, { "r": 207, "g": 111, "b": 15 }, { "r": 207, "g": 119, "b": 15 }, { "r": 207, "g": 127, "b": 15 }, { "r": 207, "g": 135, "b": 23 }, { "r": 199, "g": 135, "b": 23 }, { "r": 199, "g": 143, "b": 23 }, { "r": 199, "g": 151, "b": 31 }, { "r": 191, "g": 159, "b": 31 }, { "r": 191, "g": 159, "b": 31 }, { "r": 191, "g": 167, "b": 39 }, { "r": 191, "g": 167, "b": 39 }, { "r": 191, "g": 175, "b": 47 }, { "r": 183, "g": 175, "b": 47 }, { "r": 183, "g": 183, "b": 47 }, { "r": 183, "g": 183, "b": 55 }, { "r": 207, "g": 207, "b": 111 }, { "r": 223, "g": 223, "b": 159 }, { "r": 239, "g": 239, "b": 199 }, { "r": 255, "g": 255, "b": 255 }]

function main() {
    createDataStructure()
    createFireSource()

    setInterval(propagateFire, 30);
}

function createDataStructure() {
    let pixelArea = size();
    for (let i = 0; i < pixelArea; i++) {
        pixelArray[i] = 0
    }
}

function createFireSource() {
    let startSource = size() - fireWidth
    for (let index = startSource; index < size(); index++) {
        pixelArray[index] = FIRE_SOURCE
    }
}

function propagateFire() {
    for (let row = 0; row < fireHeight; row++) {
        for (let column = 0; column < fireWidth; column++) {
            let pixelIndex = column + (fireWidth * row)

            if(pixelIndex + fireWidth < size())
                updatePixel(pixelIndex)
        }
    }
    render()
}

function updatePixel(pixelIndex) {
    let childIndex = pixelIndex + fireWidth

    const decay = Math.floor(Math.random() * 3)
    let childIntensity = pixelArray[childIndex]
    let newIntensity = childIntensity - decay >= 0 ? childIntensity - decay : 0

    pixelArray[pixelIndex - decay] = newIntensity
}

function render() {
    for (let pixelIndex = 0; pixelIndex < pixelArray.length; pixelIndex++) {
        const fireIntensity = pixelArray[pixelIndex]
        const color = fireColorPallet[fireIntensity]

        image.data[pixelIndex * 4] = color.r
        image.data[pixelIndex * 4 + 1] = color.g
        image.data[pixelIndex * 4 + 2] = color.b
        image.data[pixelIndex * 4 + 3] = 255
    }
    
    context.putImageData(image, 0, 0)
}

function size() {
    return fireWidth * fireHeight
}

main()
