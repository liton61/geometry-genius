let count = 0;
function calculateTriangleArea() {
    count = count + 1;
    const baseField = document.getElementById('triangle-base');
    const base = baseField.value;


    const heightField = document.getElementById('triangle-height');
    const height = heightField.value;

    const area = 0.5 * base * height;
    const triangleArea = document.getElementById('triangle-area');
    triangleArea.innerText = area;

    if (base === '' || height === '') {
        return alert('Please inter a number !');
    }


    const areaCalculator = document.getElementById("calculation-entry");
    const p = document.createElement("p")
    p.innerHTML = `
    <p class = "mb-5">${count}. Triangle : ${area} cm<sup>2</sup> <button class="bg-primary text-white p-2 rounded text-sm">Convert to m<sup>2</sup></button></p>
    `
    areaCalculator.appendChild(p);
    // areaCalculator.innerText = area;

    baseField.value = '';
    heightField.value = '';
}

function calculateRectangleArea() {
    const widthField = document.getElementById('rectangle-width');
    const width = widthField.value;

    const lengthField = document.getElementById('rectangle-length');
    const length = lengthField.value;

    const area = width * length;
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText = area;


    const areaCalculator = document.getElementById("calculation-entry");
    const newP = document.createElement("p")
    newP.innerText = area
    areaCalculator.appendChild(newP)

    widthField.value = '';
    lengthField.value = '';
}

function calculateParallelogramArea() {
    const baseField = document.getElementById('parallelogram-base');
    const base = baseField.value;

    const heightField = document.getElementById('parallelogram-height');
    const height = heightField.value;

    const area = base * height;
    const parallelogramArea = document.getElementById('parallelogram-area');
    parallelogramArea.innerText = area;

    baseField.value = '';
    heightField.value = '';
}

function calculateRhombusArea() {
    const diagonal1Field = document.getElementById('rhombus-diagonal1');
    const diagonal1 = diagonal1Field.value;

    const diagonal2Field = document.getElementById('rhombus-diagonal2');
    const diagonal2 = diagonal2Field.value;

    const area = 0.5 * diagonal1 * diagonal2;
    const diagonalArea = document.getElementById('rhombus-area');
    diagonalArea.innerText = area;

    diagonal1Field.value = '';
    diagonal2Field.value = '';
}

function calculatePentagonArea() {
    const perimeterField = document.getElementById('pentagon-perimeter');
    const perimeter = perimeterField.value;

    const apothemField = document.getElementById('pentagon-apothem');
    const apothem = apothemField.value;

    const area = 0.5 * perimeter * apothem;
    const pentagonArea = document.getElementById('pentagon-area');
    pentagonArea.innerText = area;

    perimeterField.value = '';
    apothemField.value = '';
}

function calculateEllipseArea() {
    const ellipseMajor = document.getElementById('ellipse-major-radius');
    const major = ellipseMajor.value;

    const ellipseMinor = document.getElementById('ellipse-minor-radius');
    const minor = ellipseMinor.value;

    const area = 3.14 * major * minor;
    const ellipseArea = document.getElementById('ellipse-area');
    ellipseArea.innerText = area;

    ellipseMajor.value = '';
    ellipseMinor.value = '';
}