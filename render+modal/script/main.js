const container = document.querySelector('.wrap');
//console.log(operations);
function renderOps(opsArray, opWrapper) {
  let contentStr = '';

  opsArray.forEach(function (oprt) {
    contentStr += ` 
    <div class="wrap_id">
      <div class="Modal_wrap">
        <div class="content_page">
          <div class="img_wrap">
          <a><img class="link js-link" src="${oprt.operationIcon.url}" alt="${oprt.alt}" /></a>
          </div>
          <div class="${oprt.colour}">
            <div class="content_header">
              <p class="${oprt.seasonHeader.colour_class}">${oprt.seasonHeader.text}</p>
              <p class="second_header">${oprt.dateHeader}</p>
            </div>
            <h2>${oprt.operationName}</h2>
            <p class="inner_text">
            ${oprt.text}
            </p>
          </div>
        </div>
      </div>
      <div id="Modal_window" class="modal">
      <div class="modal_content ${oprt.seasonHeader.colour_class}">
        <div class="modal_header">
          <span class="close">&times;</span>
          <h2>${oprt.operationName}</h2>
        </div>
        <div class="modal_date">
          <p>${oprt.dateHeader}</p>
        </div>
        <div class="modal_body ${oprt.seasonHeader.colour_class}">
          <p>
          ${oprt.text}
          </p>
          <p>
          ${oprt.text2}
          </p>
        </div>
        <div class="modal_footer">
          <h3>${oprt.text3}</h3>
          ${oprt.first_img_wrap}
          ${oprt.second_img_wrap}
        </div>
      </div>
    </div>
      </div>`;
    
  });

  opWrapper.innerHTML = contentStr;
}


renderOps(operations, container);


const scroll_bug_zero = "0px" //
document.body.style.paddingRight = scroll_bug_zero;
let btn = document.getElementsByClassName(".js-link");
document.querySelectorAll(".js-link").forEach((btn) => {
  btn.onclick = foo;
});

function foo() 
{
  var scroll_bug = (window.innerWidth - document.body.clientWidth)+ "px"; //математика с размерами страницы
  document.getElementsByClassName("nav_bar")[0].style.width = document.body.clientWidth + "px"; //сохраняем длину для навигации
  document.body.style.paddingRight = scroll_bug; //компенсация оптсупа
  document.getElementsByClassName("nav_bar")[0].style.paddingRight = scroll_bug;//компенсация оптсупа
  
  $("body").addClass("modal_open");
  
  console.log(this); //элемент
  
  parent = this.closest(".wrap_id");
  
  console.log(parent);//родитель элемента
  
   child = parent.querySelector(".modal");
  
  child.style.display = "block";
  
  console.log(child);//нужный элемент

  let cross = child.querySelector(".close");
  document.querySelectorAll(".close").forEach((_cross) => {
    cross.onclick = del;
  });
}
let child;
let parent;
function del() {
  document.getElementsByClassName("nav_bar")[0].style.width = "100%"; //нужно вернуть что-бы не сломалось
  document.body.style.paddingRight = scroll_bug_zero; //убираем компенсацию
  document.getElementsByClassName("nav_bar")[0].style.paddingRight = scroll_bug_zero; //убираем конпенсацию 

  $("body").removeClass("modal_open")

   parent = this.closest(".wrap_id");
  
   child = parent.querySelector(".modal");

   child.style.display = "none"; //убираем модалку
}
window.onclick = function(event) {
  if (event.target == child) {
    document.getElementsByClassName("nav_bar")[0].style.width = "100%";
      document.body.style.paddingRight = scroll_bug_zero;
      document.getElementsByClassName("nav_bar")[0].style.paddingRight = scroll_bug_zero;
      child.style.display = "none";
      $("body").removeClass("modal_open")
    }
}
