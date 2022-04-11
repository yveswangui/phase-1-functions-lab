function distanceFromHqInBlocks(someValue){
    let headquarters = 42;
    return Math.abs(headquarters - someValue)
    
}
  

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start,stop){
    if(start < stop){
        return (stop - start) * 264
    } else {
        return (start - stop) * 264
    }
}

function calculatesFarePrice(start,destination){
   let distance = Math.abs((start - destination) * 264)
   if(distance  <= 400){
       return 0
   } else if (distance  > 400  && distance < 2000){
        return (distance - 400) * 0.02
   } else if (distance > 2000 && distance <= 2500){
       let price = 25
       return price
   } else {
       return 'cannot travel that far'
   }
}


