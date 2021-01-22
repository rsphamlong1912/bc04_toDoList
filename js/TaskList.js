function TaskList(){
    this.arr= [];

    this.addTask = function(taskN){
        this.arr.push(taskN);
    };

    this._findIndex = function (idTask) {
        var index = -1;
        for (var i = 0; i < this.arr.length; i++) {
          if (this.arr[i].idTask=== idTask) {
            index = i;
            break;
          }
        }
        return index;
    };

    //Xoá Task
    this.deleteTask = function (idTask) {
      var indexDel = this._findIndex(idTask);
      if (indexDel !== -1) {
        this.arr.splice(indexDel,1);
      }
    };

    //chỉnh trạng thái
    this.changeStt = function (idTask) {
      var indexTask = this._findIndex(idTask);
      if (indexTask !== -1) {
        if (this.arr[indexTask].status === "toDo") {
          this.arr[indexTask].status = "completed";
        } else {
          this.arr[indexTask].status = "toDo";
        }
      }
    };

    //tìm vị trí task
    this.findTask = function (idTask) {
        var viTri = this._findIndex(idTask);
        if (viTri !== -1) {
          //tìm thấy task
          return this.arr[viTri];
        }
    };
}