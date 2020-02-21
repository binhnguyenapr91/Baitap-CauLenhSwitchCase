function cal() {
    let month = parseInt(document.getElementById("month").value);
    let status;
    if(month>=1 && month<=12){
        switch (month) {
            case 4:
            case 6:
            case 9:
            case 11:
                status = "Month have 30 days!";
                break;
            case 2:
                status = "Month have 28 or 29 days!";
                break;
            default:
                status = "Month have 31 days!";
        }
    }else{
        status = "Month is not available";
    }

    document.getElementById("result").innerHTML = status;



}