const modal = document.querySelector('.modal')
const ticketBtns = document.querySelectorAll('.js-buy-btn')
const modalContainer = document.querySelectorAll('.js-modal-container')
const closeBtn = document.querySelector('.js-close-btn')
function OpenModal() {
    modal.classList.add('open')
}
function CloseModal() {
    modal.classList.remove('open')
}

for (const ticketBtn of ticketBtns) {
    ticketBtn.addEventListener('click', OpenModal)
}
closeBtn.addEventListener('click', CloseModal)
for (const container of modalContainer) {
    container.addEventListener('click', function (e) {
        e.stopPropagation()
    })

}

// Responsive

const mobileMenu = document.querySelector('.menu-btn')
const header = document.getElementById('header')
const headerHeight = header.clientHeight
mobileMenu.addEventListener('click', function () {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto'

    }
    else {
        header.style.height = null

    }
})

const subNavItems = document.querySelectorAll('#nav li a')
const subNavMenu = document.querySelector('#nav li .subnav')

for (const item of subNavItems) {

    item.addEventListener('click', function (e) {

        const isParentMenu = item.nextElementSibling && item.nextElementSibling.classList.contains('subnav')
        if (!isParentMenu) {
            header.style.height = null
        }
        else {
            e.preventDefault();
            subNavMenu.classList.toggle('closeSubNav')


        }

    })
}


// TextArea Handling only 1 if more use loop
const tA = document.querySelector('.message-auto-grow');
tA.setAttribute('style', 'height:' + (tA.scrollHeight) + 'px;');
tA.addEventListener("input", OnInput);
function OnInput(e) {
    if (this.style.height.replace(/[^0-9]/g, '') > 91) {
        this.style.overflowY = 'scroll'
    }
    else {
        this.style.overflowY = 'hidden'
    }
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';

}
// Add image and preview it

const image = document.querySelector('.inputImage')
image.addEventListener('change', local)
// function loadFile(e) {
//     console.log("Filename: " + e.target.files[0].name);
//     console.log("Type: " + e.target.files[0].type);
//     console.log("Size: " + e.target.files[0].size + " bytes");

//     const preview = document.querySelector('.previewImage')
//     preview.src = URL.createObjectURL(e.target.files[0]);

//     preview.onload = function () {
//         URL.revokeObjectURL(preview.src) // free memory
//     }
// };
var i = 0
var main = document.querySelector('.imagePreviewBlock')
function local(e) {
    if (main) {
        localStorage.clear()
        localStorage.setItem(`img-0`, URL.createObjectURL(e.target.files[0]))
        const test = document.createElement('div')
        test.classList.add('divImg')
        test.innerHTML = `<img id="img-${i}" class="previewImage" onclick="zoomPreviewImg(${i})" src="${localStorage.getItem('img-0')}"> <button id="imgBtn-${i}" class="imgBtn" onclick="deleteImg(${i})"><i class="ti-close"></i></button></img>`
        main.appendChild(test)
        i++

    }

}

function zoomPreviewImg(i) {
    const img = document.getElementById('img-' + i)
    
    var isNotZoom = img.clientHeight === 100
    if (isNotZoom) {
        img.classList.add('zoomPreviewImage')
        img.nextElementSibling.classList.add('showImgBtn')
    }
    else {
        img.classList.remove('zoomPreviewImage')
        img.nextElementSibling.classList.remove('showImgBtn')


    }




}
Element.prototype.remove = function () {
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
    for (var i = this.length - 1; i >= 0; i--) {
        if (this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
}
function deleteImg(i) {
    console.log(i)
    document.getElementById('img-' + i).remove()
    document.getElementById('imgBtn-' + i).remove()
}
