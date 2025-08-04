// to make the screen 
// run through a tags 
// add an element to the page where 


document.addEventListener("DOMContentLoaded", () => {
  // Create the link-covers container
  let linkCovers = document.createElement("div");
  linkCovers.id = "link-covers";
  Object.assign(linkCovers.style, {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    zIndex: 9999,
  });
  document.body.appendChild(linkCovers);

  // Function to setup hover effects for links
  function setupLinkHoverEffects() {
    const anchors = document.querySelectorAll("a:not(.hero__footer-icons a)");
    console.log("Anchors found:", anchors);
    const colors = ["#8ACCFF", "#CDBCEB", "#FFAE4A", "#FF6E6E"]; // blue, purple, orange, red
    
    anchors.forEach((anchor, index) => {
      // Determine background color: orange for first 3, then cycle through colors
      let backgroundColor;
      if (index < 3) {
        backgroundColor = "#FFAE4A"; // orange for first three
      } else {
        backgroundColor = colors[(index - 3) % colors.length];
      }

      // Pre-create the cover element
      const cover = document.createElement("div");
      
      // Create full-screen background
      const background = document.createElement("div");
      Object.assign(background.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        background: backgroundColor,
        pointerEvents: "none",
        zIndex: 1,
        opacity: "0",
        transition: "opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      });
      
      // Create text element positioned at the link
      const textElement = document.createElement("div");
      
      // Function to update text element position
      function updateTextPosition() {
        const rect = anchor.getBoundingClientRect();
        textElement.textContent = anchor.textContent;
        Object.assign(textElement.style, {
          position: "absolute",
          left: `${rect.left + window.scrollX - 0.5}px`,
          top: `${rect.top + window.scrollY}px`,
          width: `${rect.width + 2}px`,
          height: `${rect.height}px`,
          color: "#000",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          font: window.getComputedStyle(anchor).font,
          textDecoration: "underline",
          pointerEvents: "none",
          zIndex: 20,
          borderRadius: window.getComputedStyle(anchor).borderRadius,
          opacity: "0",
          whiteSpace: "pre-line",
          transition: "opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        });
      }
      
      // Initialize text position
      updateTextPosition();
      
      cover.appendChild(background);
      cover.appendChild(textElement);
      linkCovers.appendChild(cover);

      anchor.addEventListener("mouseenter", () => {
        // Update position in case layout changed
        updateTextPosition();
        
        // Trigger fade in
        requestAnimationFrame(() => {
          background.style.opacity = "0.8";
          textElement.style.opacity = "1";
        });

        linkCovers.childNodes.forEach((otherCover, otherIdx) => {
          if (otherIdx !== index) {
            const [otherBackground, otherTextElement] = otherCover.childNodes;
            otherBackground.style.opacity = "0";
            otherTextElement.style.opacity = "0";
          }
        });
      });

      anchor.addEventListener("mouseleave", () => {
        // Trigger fade out
        background.style.opacity = "0";
        textElement.style.opacity = "0";
      });
      
      // Update position on window resize/scroll
      window.addEventListener("resize", updateTextPosition);
      window.addEventListener("scroll", updateTextPosition);
    });
  }

  setupLinkHoverEffects();
});