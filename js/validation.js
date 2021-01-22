
function Validation(){
    this.kiemTraRong = function(input , notiInput, mess){
        if(input === ""){
            getEle(notiInput).innerHTML = mess;
            return false;
        }
        getEle(notiInput).innerHTML = "";
        return true;
    };

    this.kiemTraTrung = function(input , notiInput, mess, arr){
        var kiem = true;
        for (var i = 0 ; i < arr.length ; i++){
            if(input === arr[i].nameTask){
                kiem = false;
                break;
                }
            }   
            if(kiem){
                getEle(notiInput).innerHTML = "";
                return true;
            }
                getEle(notiInput).innerHTML = mess;
                return false;
        }      
};

