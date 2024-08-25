function getShippingCost(country) {
  let credits = 0;
  let message;
  switch (country) {
    case "China":
      credits = 100;
      message = "Shipping to China will cost " + credits + " credits";
      break;
    case "Chile":
      credits = 250;
      message = "Shipping to Chile will cost " + credits + " credits";
      break;
    case "Australia":
      credits = 170;
      message = "Shipping to Australia will cost " + credits + " credits";
      break;
    case "Jamaica":
      credits = 120;
      message = "Shipping to Jamaica will cost " + credits + " credits";
      break;
    default:
      message = "Sorry, there is no delivery to your country";
  }
  return message;
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
