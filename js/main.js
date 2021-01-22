var taskList = new TaskList();
var validation = new Validation();

//Lấy danh sach sv từ localStorage
getLocalStorage();

function getEle(id) {
    return document.getElementById(id);
}

//Thêm task 
getEle("addItem").addEventListener("click", function(){

    var nameTask = getEle("newTask").value;
    var idTask = Math.random();
    var status = "toDo";

    var isValid = true;
    isValid &= validation.kiemTraRong(nameTask, "notiInput", "(*) Vui lòng nhập task" ) && validation.kiemTraTrung(nameTask ,"notiInput", "(*) Task đã tồn tại", taskList.arr);

    if(isValid){

    var newTask = new Task(nameTask,idTask,status);
    alert("Thêm task thành công!");
    taskList.addTask(newTask);
    taoBang(taskList.arr);
    setLocalStorage();}
});

//Xoá task

function xoaTask(idTask) {
  taskList.deleteTask(idTask);
  //render ra màn hình
  taoBang(taskList.arr);
  setLocalStorage();
}

//Đổi trạng thái
function changeStt(idTask){
  taskList.changeStt(idTask);
  alert("Đổi trạng thái thành công!");
  taoBang(taskList.arr);
  setLocalStorage();
}

//tạo khung
function hienThi(arr) {
  return `<li>
      <span>${arr.nameTask}</span>
      <div class="buttons">
        <button class="remove" onclick="xoaTask(${arr.idTask})"><i class="fa fa-trash-alt"></i></button>
        <button class="complete" onclick="changeStt(${arr.idTask})">
          <i class="far fa-check-circle"></i>
          <i class="fas fa-check-circle"></i>
        </button>
      </div>
    </li>`;
}

function taoBang(arr) {
    var content_todo = "";
    var content_compt = "";
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].status === "toDo") {
        content_todo += hienThi(arr[i]);
      } else if (arr[i].status === "completed"){
        content_compt += hienThi(arr[i]);
      }
    }
    getEle("todo").innerHTML = content_todo;
    getEle("completed").innerHTML = content_compt;

}


function setLocalStorage() {
  // chuyển kiểu JSON => String (JSON.stringify)
  var arrString = JSON.stringify(taskList.arr);

  //Lưu xuống localStorage
  localStorage.setItem("DSTASK", arrString);
}

/**
 * Lấy danh sách từ localStorage
 * chuyển kiểu String => JSON (JSON.parse)
 */
function getLocalStorage() {
  if (localStorage.getItem("DSTASK")) {
    taskList.arr = JSON.parse(localStorage.getItem("DSTASK"));
    taoBang(taskList.arr);
  }
}
