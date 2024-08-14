$(document).ready(function(){
    let i=1;
    $("#myBtn").on("click",function (){
        $("#myModal").modal("show");
    });
    let txtCode=$("#txtCode");
    let errorCode=$("#errorCode");
    //check code
    function checkCode() {
        let regex=/^[A-Z]{3}-[A-Z]{3}-\d{2}-\d{4}$/;
        if(txtCode.val()===''){
            errorCode.html("Please enter this field.");
            return false;
        }
        if(!regex.test(txtCode.val())){
            errorCode.html("Please enter valid field code.");
            return false;
        }
        errorCode.html("*");
        return true;
    }
    //txtCode.blur(checkCode());
    //check travel name
    let txtTravelName=$("#txtTravelName");
    let errorTravelName=$("#errorTravelName");
    function checkTravelName(){
        if(txtTravelName.val()===''){
            errorTravelName.html("Please enter this field.");
            return false;
        }
        errorTravelName.html("*");
        return true;
    }
    //txtTravelName.blur(checkTravelName());
    //check date
    let txtDateDepart=$("#txtDateDepart");
    let errorDateDepart=$("#errorDateDepart");
    function checkDateDepart(){
        if(txtDateDepart.val()===''){
            errorDateDepart.html("Please enter this field.");
            return false;
        }
        let day=new Date(txtDateDepart.val());
        let today=new Date();
        today.setDate(today.getDate()+30);
        if(day<today){
            errorDateDepart.html("Date depart after today 30 days.");
            return false;
        }
        errorDateDepart.html("*");
        return true;
    }
    //txtDateDepart.blur(checkDateDepart());
    let txtPrice=$("#txtPrice");
    let errorPrice=$("#errorPrice");
    function checkPrice(){
        let price=txtPrice.val();
        if(price==='')
        {
            errorPrice.html("Please enter this field.");
            return false;
        }
        if(isNaN(price)){
            errorPrice.html("Please enter number.");
            return false;
        }
        if(eval(price)<0){
            errorPrice.html("Please enter number > 0.");
            return false;
        }
        errorPrice.html("*");
        return true;
    }
    //txtPrice.blur(checkPrice());
    $("#btnAdd").on("click",function (){
        if(!checkCode()||!checkTravelName()||!checkDateDepart()||!checkPrice()){
            //alert("Please enter valid.")
            return false;
        }
        let code=txtCode.val();
        let travelName=txtTravelName.val();
        let dateDepart=txtDateDepart.val();
        let price=txtPrice.val();
        let image=$("txtImage").val();
        let dataRow="<tr>\n" +
            "<td>"+(i++)+"</td>\n" +
            "<td>"+(code)+"</td>\n" +
            "<td>"+(travelName)+"</td>\n" +
            "<td>"+(dateDepart)+"</td>\n" +
            "<td>"+(price)+"</td>\n" +
            "<td>"+(image)+"</td>\n" +
            "</tr>"
        $("table tbody").append(dataRow);
        $("myModal").modal("hide");
        return true;
    });
});