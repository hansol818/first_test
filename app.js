const inventory = [
    { no: 1, name: "김민관", vol: 4 },
    { no: 2, name: "정다운", vol: 2 },
    { no: 3, name: "박준석", vol: 10 },
    { no: 4, name: "이현범", vol: 8 },
    { no: 5, name: "오한솔", vol: 7 },
    { no: 6, name: "도토리", vol: 28 },
    { no: 7, name: "밤토리", vol: 30 },
    { no: 8, name: "김세진", vol: 31 },
  ];
  
  const arr=[];

  for(let i = 0 ; i<inventory.length ; i++){
    if(inventory[i].name === "이현범" || inventory[i].name === "김민관" || inventory[i].name === "정다운"){
        console.log(inventory[i]);
        arr.push(inventory[i]);
        console.log(arr);
        if(arr[i].vol >= 3 ){
            console.log(arr[i]);
        } else{
            
        }
    } else{
        
    }
  };



//   if(window.confirm("퀘스트를 완료하시겠습니까?")){
    
//   } else{
//     alert("bb");
//   }