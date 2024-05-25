function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

function formatDate(date) {
  
    date = new Date(date);
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("-");
  
  }
  export function getYYMMtimeStamp(timestamp){
    
    let today = new Date(timestamp) // get today's date
    let tomorrow = new Date(today)
    tomorrow.setDate(today.getDate() ) // Add 1 to today's date and set it to tomorrow
    
    let month = Number(tomorrow.getMonth())+1;
    
    if (month<10){
        month = "0"+ month
    }
    let tomorrowDate=tomorrow.getDate();
    if (tomorrow.getDate()<10){
        tomorrowDate = "0"+ tomorrowDate
    }
    
    
    return tomorrow.getFullYear()+"-" + month + "-"+ tomorrowDate
        
        
    }
  export {formatDate}