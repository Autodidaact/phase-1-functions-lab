// Code your solution in this file!
 function distanceFromHqInBlocks(location){
     if (location >= 42){
         return location - 42;
     }else{
         return 42 - location;
     }
 }

 function distanceFromHqInFeet(loc){
     return distanceFromHqInBlocks(loc) * 264;
 }
 function distanceTravelledInFeet(start, end){
    if (start > end){
        return (start - end) * 264;
    }else{
        return (end - start) * 264;
     
    }
 }
 function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination) 
    if (distance <= 400){
        return 0;
    }else if (distance > 400 && distance <= 2000){
        return(distance - 400) * 0.02;
    }else if (distance > 2000 && distance <= 2500){
        return 25;
    }else if (distance > 2000 && distance > 2500){
        return 'cannot travel that far';
    }
     
 }
 