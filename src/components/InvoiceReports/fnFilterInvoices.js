const fnFilterInvoices=(selectedFilters,aDataList,setaDataList)=>{
   
    let aDataListCopy =JSON.parse(JSON.stringify(aDataList));
    Object.entries(selectedFilters).forEach(([key, value]) => {
        if(value!=null && (key=="createdDate" || key=="requestDeliveryDate") && value.includes("-")){
            selectedFilters[key]=new Date(selectedFilters[key]).getTime() / 1000
        }
        
      });
     
    Object.entries(selectedFilters).forEach(([key, value]) => {
        if(value!=null  && (key=="createdDate" || key=="requestDeliveryDate" ) ){
            aDataListCopy=aDataListCopy.filter((list)=>list[key]>value);
        }
        else if(value!=null){
            
            aDataListCopy=aDataListCopy.filter((list)=>list[key]==value);
        }
   
        
      });
   
    setaDataList(aDataListCopy);

}

export default fnFilterInvoices;