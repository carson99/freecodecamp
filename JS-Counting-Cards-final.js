var count = 0;

function cc(card) {
  // Only change code below this line

  if (card==2) {
    count=count+1;
  } else if (card==3) {
    count=count+1;
  } else if (card==4) {
    count=count+1;
  } else if (card==5) {
    count=count+1;
  } else if (card==6) {
    count=count+1;
  } else if (card==7) {
    count=count;
  } else if (card==8) {
    count=count;
  } else if (card==9){
    count=count;
  } else if (card==10) {
    count=count-1;
  } else if (card=='J') {
    count=count-1;
  } else if (card=='Q') {
    count=count-1;
  } else if (card=='K') {
    count=count-1;
  } else if (card=='A') {
    count=count-1;
  } else {
    return "Oh no";
  }
  if (count>0) {
    return count + " Bet";
  } else if (count<=0) {
    return count + " Hold";
  } else {
  return "Change Me";
  }
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(4); cc(5); cc(6);
