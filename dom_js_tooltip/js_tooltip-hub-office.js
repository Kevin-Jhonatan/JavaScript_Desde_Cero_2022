// Responsive.
if (window.innerWidth < 960) {
  console.log("hey inside if and this is for mobile devices");
  /* Torre 1 */
  // Add Event Listener to circle pink div 1.
  let punto1 = document.getElementById("tooltip-1");
  punto1.addEventListener("click", mostrarTooltip1Touch);
  punto1.style.position = "absolute";
  punto1.style.bottom = "62%";
  punto1.style.left = "20%";

  var tooltipContainerTorre = document.getElementById("tooltip-torre");
  /* tooltipContainerTorre.style.display = "none";
  tooltipContainerTorre.style.position = "absolute";
  tooltipContainerTorre.style.top = "20%";
  tooltipContainerTorre.style.left = "20%";
  tooltipContainerTorre.style.padding = "20px";
  tooltipContainerTorre.style.zIndex = "99999"; */

  //tooltipContainerHotel.addEven
  // Add event click to icon 'X' to close container.
  var tooltipTorreCloseContainer = document.getElementById(
    "tooltip-torre-close"
  );
  tooltipTorreCloseContainer.addEventListener("click", ocultarTooltip1Touch);

  function mostrarTooltip1Touch() {
    console.log("Heyyyyyy this is touched over tooltip-1");
    tooltipContainerTorre.setAttribute("style", "display: block");
    tooltipContainerTorre.style.position = "absolute";
    tooltipContainerTorre.style.display = "flex";
    tooltipContainerTorre.style.flexDirection = "column";
    tooltipContainerTorre.style.alignItems = "end";
    tooltipContainerTorre.style.top = "35%";
    tooltipContainerTorre.style.left = "2%";
    tooltipContainerTorre.style.padding = "10px";

    // Hide 'X' icon when it is desktop
    tooltipTorreCloseContainer.setAttribute("style", "display: block");
  }

  function ocultarTooltip1Touch(
    tooltipTorreCloseContainer3tooltipTorreCloseContainer3tooltipTorreCloseContainer3
  ) {
    //console.log('Heyyyyyy this is touch outside the tooltip torre container');
    console.log(
      "Heyyyyyy this is click on the X icon to close the tooltip container"
    );
    tooltipContainerTorre.setAttribute("style", "display: none");
  }
  /**
   * Hotel 1
   */
  // Add Event Listener to circle pink div 2.
  let punto2 = document.getElementById("tooltip-2");
  punto2.addEventListener("click", mostrarTooltip2Touch);
  punto2.style.position = "absolute";
  punto2.style.bottom = "50%";
  punto2.style.right = "8%";

  var tooltipContainerHotel = document.getElementById("tooltip-hotel");
  /* tooltipContainerHotel.style.display = "none";
  tooltipContainerHotel.style.position = "absolute";
  tooltipContainerHotel.style.top = "25%";
  tooltipContainerHotel.style.right = "15%";
  tooltipContainerHotel.style.padding = "20px";
  tooltipContainerHotel.style.zIndex = "99999"; */

  // Add event click to icon 'X' to close container.
  let tooltipHotelCloseContainer = document.getElementById(
    "tooltip-hotel-close"
  );
  tooltipHotelCloseContainer.addEventListener("click", ocultarTooltip2Touch);

  function mostrarTooltip2Touch() {
    console.log("Heyyyyyy this is touched over tooltip-2");
    tooltipContainerHotel.setAttribute("style", "display: block");
    // Hide 'X' icon when it is desktop
    tooltipContainerHotel.setAttribute("style", "display: block");
    tooltipContainerHotel.style.position = "absolute";
    tooltipContainerHotel.style.display = "flex";
    tooltipContainerHotel.style.flexDirection = "column";
    tooltipContainerHotel.style.alignItems = "end";
    tooltipContainerHotel.style.top = "45%";
    tooltipContainerHotel.style.right = "2%";
    tooltipContainerHotel.style.padding = "10px";
  }

  function ocultarTooltip2Touch() {
    //console.log('Heyyyyyy this is touch outside the tooltip torre container');
    console.log(
      "Heyyyyyy this is click on the X icon to close the tooltip 2 container"
    );
    tooltipContainerHotel.setAttribute("style", "display: none");
  }
} else {
  console.log("hey inside else and this is for desktop");
  /* Torre 1 */
  // Add Event Listener to circle pink div 1.
  let punto1 = document.getElementById("tooltip-1");
  punto1.addEventListener("mouseover", mostrarTooltip1);
  punto1.style.position = "absolute";
  punto1.style.bottom = "48%";
  punto1.style.left = "33%";

  var tooltipContainerTorre = document.getElementById("tooltip-torre");
  tooltipContainerTorre.addEventListener("mouseout", ocultarTooltip1);
  tooltipContainerTorre.addEventListener("mouseover", mostrarTooltip1);

  function mostrarTooltip1() {
    //console.log('Heyyyyyy this is over tooltip-1');
    tooltipContainerTorre.setAttribute("style", "display: block");
    tooltipContainerTorre.style.position = "absolute";
    tooltipContainerTorre.style.top = "20%";
    tooltipContainerTorre.style.left = "20%";
    tooltipContainerTorre.style.padding = "20px";
    tooltipContainerTorre.style.zIndex = "99999";

    // Hide 'X' icon when it is desktop
    let tooltipTorreCloseContainer = document.getElementById(
      "tooltip-torre-close"
    );
    tooltipTorreCloseContainer.setAttribute("style", "display: none");
  }

  function ocultarTooltip1() {
    //console.log('Heyyyyyy this is leaving the tooltip torre container');
    tooltipContainerTorre.setAttribute("style", "display: none");
  }
  /* Hotel 1 */
  // Add Event Listener to circle pink div 2.
  let punto2 = document.getElementById("tooltip-2");
  punto2.addEventListener("mouseover", mostrarTooltip2);
  punto2.style.position = "absolute";
  punto2.style.bottom = "33%";
  punto2.style.right = "27%";

  var tooltipContainerHotel = document.getElementById("tooltip-hotel");
  tooltipContainerHotel.addEventListener("mouseout", ocultarTooltip2);
  tooltipContainerHotel.addEventListener("mouseover", mostrarTooltip2);

  function mostrarTooltip2() {
    //console.log('Heyyyyyy this is over tooltip-2');
    tooltipContainerHotel.setAttribute("style", "display: block");
    tooltipContainerHotel.style.position = "absolute";
    tooltipContainerHotel.style.top = "25%";
    tooltipContainerHotel.style.right = "15%";
    tooltipContainerHotel.style.padding = "20px";
    tooltipContainerHotel.style.zIndex = "99999";

    // Hide 'X' icon when it is desktop
    let tooltipHotelCloseContainer = document.getElementById(
      "tooltip-hotel-close"
    );
    tooltipHotelCloseContainer.setAttribute("style", "display: none");
  }
  function ocultarTooltip2() {
    tooltipContainerHotel.setAttribute("style", "display: none");
  }
}
