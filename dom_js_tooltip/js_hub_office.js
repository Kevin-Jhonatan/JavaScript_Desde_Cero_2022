// Responsive.
if (window.innerWidth < 960) {
  console.log("hey inside if and this is for mobile devices");
  /* Torre 1 */
  // Add Event Listener to circle pink div 1.
  let punto1 = document.getElementById("tooltip-1");
  punto1.addEventListener("click", mostrarTooltip1Touch);
  punto1.style.position = "absolute";
  punto1.style.top = "13%";
  punto1.style.left = "48%";

  let tooltipContainerTorre = document.getElementById("tooltip-torre");

  //tooltipContainerHotel.addEven
  // Add event click to icon 'X' to close container.
  let tooltipTorreCloseContainer = document.getElementById(
    "tooltip-torre-close"
  );
  tooltipTorreCloseContainer.addEventListener("click", ocultarTooltip1Touch);

  function mostrarTooltip1Touch() {
    console.log("Heyyyyyy this is touched over tooltip-1");
    tooltipContainerTorre.setAttribute("style", "display: block");
    tooltipContainerTorre.style.position = "absolute";
    tooltipContainerTorre.style.top = "12%";
    tooltipContainerTorre.style.left = "3%";
    tooltipContainerTorre.style.padding = "10px";
    tooltipContainerTorre.style.zIndex = "999999";
    tooltipContainerTorre.style.display = "flex";
    tooltipContainerTorre.style.flexDirection = "column";
    tooltipContainerTorre.style.alignItems = "end";

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
  punto2.style.top = "26%";
  punto2.style.left = "29%";

  let tooltipContainerHotel = document.getElementById("tooltip-hotel");

  // Add event click to icon 'X' to close container.
  let tooltipHotelCloseContainer = document.getElementById(
    "tooltip-hotel-close"
  );
  tooltipHotelCloseContainer.addEventListener("click", ocultarTooltip2Touch);

  function mostrarTooltip2Touch() {
    console.log("Heyyyyyy this is touched over tooltip-2");
    tooltipContainerHotel.setAttribute("style", "display: block");
    tooltipContainerHotel.style.position = "absolute";
    tooltipContainerHotel.style.top = "12%";
    tooltipContainerHotel.style.right = "2%";
    tooltipContainerHotel.style.padding = "10px";
    tooltipContainerHotel.style.zIndex = "9999999";
    tooltipContainerHotel.style.display = "flex";
    tooltipContainerHotel.style.flexDirection = "column";
    tooltipContainerHotel.style.alignItems = "end";

    // Hide 'X' icon when it is desktop
    tooltipHotelCloseContainer.setAttribute("style", "display: block");
  }

  function ocultarTooltip2Touch() {
    //console.log('Heyyyyyy this is touch outside the tooltip torre container');
    console.log(
      "Heyyyyyy this is click on the X icon to close the tooltip 2 container"
    );
    tooltipContainerHotel.setAttribute("style", "display: none");
  }
  /** Torre 2 */
  // Add Event Listener to circle pink div 1.
  let punto3 = document.getElementById("tooltip-3");
  punto3.addEventListener("click", mostrarTooltip3Touch);
  punto3.style.position = "absolute";
  punto3.style.top = "38%";
  punto3.style.left = "49%";

  let tooltipContainerTorre3 = document.getElementById("tooltip-torre-1");

  //tooltipContainerHotel.addEven
  // Add event click to icon 'X' to close container.
  let tooltipTorreCloseContainer3 = document.getElementById(
    "tooltip-torre-close-1"
  );
  tooltipTorreCloseContainer3.addEventListener("click", ocultarTooltip3Touch);

  function mostrarTooltip3Touch() {
    console.log("Heyyyyyy this is touched over tooltip-3");
    tooltipContainerTorre3.setAttribute("style", "display: block");
    tooltipContainerTorre3.style.position = "absolute";
    tooltipContainerTorre3.style.top = "32%";
    tooltipContainerTorre3.style.left = "3%";
    tooltipContainerTorre3.style.padding = "10px";
    tooltipContainerTorre3.style.zIndex = "99999999";
    tooltipContainerTorre3.style.display = "flex";
    tooltipContainerTorre3.style.flexDirection = "column";
    tooltipContainerTorre3.style.alignItems = "end";
    // Hide 'X' icon when it is desktop
    tooltipTorreCloseContainer3.setAttribute("style", "display: block");
  }

  function ocultarTooltip3Touch() {
    //console.log('Heyyyyyy this is touch outside the tooltip torre container');
    console.log(
      "Heyyyyyy this is click on the X icon to close the tooltip container"
    );
    tooltipContainerTorre3.setAttribute("style", "display: none");
  }
  /**
   * Hotel 2
   */
  // Add Event Listener to circle pink div 2.
  let punto4 = document.getElementById("tooltip-4");
  punto4.addEventListener("click", mostrarTooltip4Touch);
  punto4.style.position = "absolute";
  punto4.style.top = "53%";
  punto4.style.left = "28%";

  let tooltipContainerHotel4 = document.getElementById("tooltip-hotel-1");

  // Add event click to icon 'X' to close container.
  let tooltipHotelCloseContainer4 = document.getElementById(
    "tooltip-hotel-close-1"
  );
  tooltipHotelCloseContainer4.addEventListener("click", ocultarTooltip4Touch);

  function mostrarTooltip4Touch() {
    console.log("Heyyyyyy this is touched over tooltip-4");
    tooltipContainerHotel4.setAttribute("style", "display: block");
    tooltipContainerHotel4.style.position = "absolute";
    tooltipContainerHotel4.style.top = "43%";
    tooltipContainerHotel4.style.right = "2%";
    tooltipContainerHotel4.style.padding = "10px";
    tooltipContainerHotel4.style.zIndex = "999999999";
    tooltipContainerHotel4.style.display = "flex";
    tooltipContainerHotel4.style.flexDirection = "column";
    tooltipContainerHotel4.style.alignItems = "end";
    // Hide 'X' icon when it is desktop
    tooltipHotelCloseContainer4.setAttribute("style", "display: block");
  }

  function ocultarTooltip4Touch() {
    //console.log('Heyyyyyy this is touch outside the tooltip torre container');
    console.log(
      "Heyyyyyy this is click on the X icon to close the tooltip 4 container"
    );
    tooltipContainerHotel4.setAttribute("style", "display: none");
  }
  /** Torre 3 */
  // Add Event Listener to circle pink div 5.
  let punto5 = document.getElementById("tooltip-5");
  punto5.addEventListener("click", mostrarTooltip5Touch);
  punto5.style.position = "absolute";
  punto5.style.top = "65%";
  punto5.style.left = "50%";

  let tooltipContainerTorre5 = document.getElementById("tooltip-torre-2");

  //tooltipContainerHotel.addEven
  // Add event click to icon 'X' to close container.
  let tooltipTorreCloseContainer5 = document.getElementById(
    "tooltip-torre-close-2"
  );
  tooltipTorreCloseContainer5.addEventListener("click", ocultarTooltip5Touch);

  function mostrarTooltip5Touch() {
    console.log("Heyyyyyy this is touched over tooltip-5");
    tooltipContainerTorre5.setAttribute("style", "display: block");
    tooltipContainerTorre5.style.position = "absolute";
    tooltipContainerTorre5.style.top = "59%";
    tooltipContainerTorre5.style.left = "3%";
    tooltipContainerTorre5.style.padding = "10px";
    tooltipContainerTorre5.style.zIndex = "999999999";
    tooltipContainerTorre5.style.display = "flex";
    tooltipContainerTorre5.style.flexDirection = "column";
    tooltipContainerTorre5.style.alignItems = "end";

    // Hide 'X' icon when it is desktop
    tooltipTorreCloseContainer5.setAttribute("style", "display: block");
  }

  function ocultarTooltip5Touch() {
    //console.log('Heyyyyyy this is touch outside the tooltip torre container');
    console.log(
      "Heyyyyyy this is click on the X icon to close the tooltip container"
    );
    tooltipContainerTorre5.setAttribute("style", "display: none");
  }
  /**
   * Hotel 3
   */
  // Add Event Listener to circle pink div 2.
  let punto6 = document.getElementById("tooltip-6");
  punto6.addEventListener("click", mostrarTooltip6Touch);
  punto6.style.position = "absolute";
  punto6.style.top = "80%";
  punto6.style.left = "27%";

  let tooltipContainerHotel6 = document.getElementById("tooltip-hotel-2");

  // Add event click to icon 'X' to close container.
  let tooltipHotelCloseContainer6 = document.getElementById(
    "tooltip-hotel-close-2"
  );
  tooltipHotelCloseContainer6.addEventListener("click", ocultarTooltip6Touch);

  function mostrarTooltip6Touch() {
    console.log("Heyyyyyy this is touched over tooltip-6");
    tooltipContainerHotel6.setAttribute("style", "display: block");
    tooltipContainerHotel6.style.position = "absolute";
    tooltipContainerHotel6.style.top = "70%";
    tooltipContainerHotel6.style.right = "2%";
    tooltipContainerHotel6.style.padding = "10px";
    tooltipContainerHotel6.style.zIndex = "99999999999";
    tooltipContainerHotel6.style.display = "flex";
    tooltipContainerHotel6.style.flexDirection = "column";
    tooltipContainerHotel6.style.alignItems = "end";

    // Hide 'X' icon when it is desktop
    tooltipHotelCloseContainer6.setAttribute("style", "display: block");
  }

  function ocultarTooltip6Touch() {
    //console.log('Heyyyyyy this is touch outside the tooltip torre container');
    console.log(
      "Heyyyyyy this is click on the X icon to close the tooltip 6 container"
    );
    tooltipContainerHotel6.setAttribute("style", "display: none");
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

  let tooltipContainerTorre = document.getElementById("tooltip-torre");
  tooltipContainerTorre.addEventListener("mouseout", ocultarTooltip1);
  tooltipContainerTorre.addEventListener("mouseover", mostrarTooltip1);
  tooltipContainerTorre.style.position = "absolute";
  tooltipContainerTorre.style.top = "20%";
  tooltipContainerTorre.style.left = "20%";
  tooltipContainerTorre.style.padding = "20px";
  tooltipContainerTorre.style.zIndex = "99999";
  function mostrarTooltip1() {
    //console.log('Heyyyyyy this is over tooltip-1');
    tooltipContainerTorre.setAttribute("style", "display: block");

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

  let tooltipContainerHotel = document.getElementById("tooltip-hotel");
  tooltipContainerHotel.addEventListener("mouseout", ocultarTooltip2);
  tooltipContainerHotel.addEventListener("mouseover", mostrarTooltip2);
  tooltipContainerHotel.style.position = "absolute";
  tooltipContainerHotel.style.top = "25%";
  tooltipContainerHotel.style.right = "15%";
  tooltipContainerHotel.style.padding = "20px";
  tooltipContainerHotel.style.zIndex = "99999";
  function mostrarTooltip2() {
    //console.log('Heyyyyyy this is over tooltip-2');
    tooltipContainerHotel.setAttribute("style", "display: block");

    // Hide 'X' icon when it is desktop
    let tooltipHotelCloseContainer = document.getElementById(
      "tooltip-hotel-close"
    );
    tooltipHotelCloseContainer.setAttribute("style", "display: none");
  }

  function ocultarTooltip2() {
    //console.log('Heyyyyyy this is leaving the tooltip hotel container');
    tooltipContainerHotel.setAttribute("style", "display: none");
  }
  /* Torre 2 */
  // Add Event Listener to circle pink div 1.
  let punto3 = document.getElementById("tooltip-3");
  punto3.addEventListener("mouseover", mostrarTooltip3);
  punto3.style.position = "absolute";
  punto3.style.top = "30%";
  punto3.style.left = "49%";

  let tooltipContainerTorre3 = document.getElementById("tooltip-torre-1");
  tooltipContainerTorre3.addEventListener("mouseout", ocultarTooltip3);
  tooltipContainerTorre3.addEventListener("mouseover", mostrarTooltip3);

  function mostrarTooltip3() {
    //console.log('Heyyyyyy this is over tooltip-1');
    tooltipContainerTorre3.setAttribute("style", "display: block");

    // Hide 'X' icon when it is desktop
    let tooltipTorreCloseContainer3 = document.getElementById(
      "tooltip-torre-close-1"
    );
    tooltipTorreCloseContainer3.setAttribute("style", "display: none");
  }

  function ocultarTooltip3() {
    //console.log('Heyyyyyy this is leaving the tooltip torre container');
    tooltipContainerTorre3.setAttribute("style", "display: none");
  }
  /* Hotel 2 */
  // Add Event Listener to circle pink div 2.
  let punto4 = document.getElementById("tooltip-4");
  punto4.addEventListener("mouseover", mostrarTooltip4);
  punto4.style.position = "absolute";
  punto4.style.top = "42%";
  punto4.style.left = "20%";

  let tooltipContainerHotel4 = document.getElementById("tooltip-hotel-1");
  tooltipContainerHotel4.addEventListener("mouseout", ocultarTooltip4);
  tooltipContainerHotel4.addEventListener("mouseover", mostrarTooltip4);

  function mostrarTooltip4() {
    //console.log('Heyyyyyy this is over tooltip-2');
    tooltipContainerHotel4.setAttribute("style", "display: block");

    // Hide 'X' icon when it is desktop
    let tooltipHotelCloseContainer4 = document.getElementById(
      "tooltip-hotel-close-1"
    );
    tooltipHotelCloseContainer4.setAttribute("style", "display: none");
  }

  function ocultarTooltip4() {
    //console.log('Heyyyyyy this is leaving the tooltip hotel container');
    tooltipContainerHotel4.setAttribute("style", "display: none");
  }
  /* Torre 3 */
  // Add Event Listener to circle pink div 1.
  let punto5 = document.getElementById("tooltip-5");
  punto5.addEventListener("mouseover", mostrarTooltip5);
  punto5.style.position = "absolute";
  punto5.style.top = "55%";
  punto5.style.left = "50%";

  let tooltipContainerTorre5 = document.getElementById("tooltip-torre-2");
  tooltipContainerTorre5.addEventListener("mouseout", ocultarTooltip5);
  tooltipContainerTorre5.addEventListener("mouseover", mostrarTooltip5);

  function mostrarTooltip5() {
    //console.log('Heyyyyyy this is over tooltip-1');
    tooltipContainerTorre5.setAttribute("style", "display: block");

    // Hide 'X' icon when it is desktop
    let tooltipTorreCloseContainer5 = document.getElementById(
      "tooltip-torre-close-2"
    );
    tooltipTorreCloseContainer5.setAttribute("style", "display: none");
  }

  function ocultarTooltip5() {
    //console.log('Heyyyyyy this is leaving the tooltip torre container');
    tooltipContainerTorre5.setAttribute("style", "display: none");
  }
  /* Hotel 3 */
  // Add Event Listener to circle pink div 2.
  let punto6 = document.getElementById("tooltip-6");
  punto6.addEventListener("mouseover", mostrarTooltip6);
  punto6.style.position = "absolute";
  punto6.style.top = "70%";
  punto6.style.left = "20%";

  let tooltipContainerHotel6 = document.getElementById("tooltip-hotel-2");
  tooltipContainerHotel6.addEventListener("mouseout", ocultarTooltip6);
  tooltipContainerHotel6.addEventListener("mouseover", mostrarTooltip6);

  function mostrarTooltip6() {
    //console.log('Heyyyyyy this is over tooltip-2');
    tooltipContainerHotel6.setAttribute("style", "display: block");

    // Hide 'X' icon when it is desktop
    let tooltipHotelCloseContainer6 = document.getElementById(
      "tooltip-hotel-close-2"
    );
    tooltipHotelCloseContainer6.setAttribute("style", "display: none");
  }

  function ocultarTooltip6() {
    //console.log('Heyyyyyy this is leaving the tooltip hotel container');
    tooltipContainerHotel6.setAttribute("style", "display: none");
  }
}
