function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - 42);
}
// function distanceFromHqInfeet(distance){
//     return distanceFromHqInBlocks(distance) *264;
// }

function distanceTravelledInFeet(start , stop){
  return Math.abs(stop- start) * 264;
}
function calculatesFarePrice(start, destination){
    const totalDistance = distanceTravelledInFeet(start, destination);
    if (totalDistance < 400) {
      return 0;
    }
}

function distanceFromHqInFeet(distance){
    return distanceFromHqInBlocks(distance) * 264;
  }
  
  function distanceTravelledInFeet(start , end){
    return Math.abs(end - start) * 264;
  }
  
  function calculatesFarePrice(start, destination){
    const totalDistance = distanceTravelledInFeet(start, destination);
    if (totalDistance < 400) {
      return 0;
    }
    else if (totalDistance > 400 && totalDistance < 2000){
      return (totalDistance -400) * 0.02;
    }
     else if (totalDistance > 2000 && totalDistance < 2500){
      return 25;
    }
    else if (totalDistance > 2500){
      return 'cannot travel that far';
    }
  
  }

// function calculatesFarePrice(start,stop){
//     const totalDistance = distanceTravelledInFeet (start,stop);

// } 
//     else if (totalDistance > 400 && totalDistance < 2000){
//     return (totalDistance -400) * 0.02;
// }
// else if (totalDistance > 400 && totalDistance < 2000){
//     return (totalDistance -400) * 0.02;
//   }
//    else if (totalDistance > 2000 && totalDistance < 2500){
//     return 25;
//   }
//   else if (totalDistance > 2500){
//     return 'cannot travel that far';
//   }

