document.addEventListener("DOMContentLoaded", function() {

    function placeCaretAtEnd(el) {
      el.focus();
  
      if (typeof window.getSelection != "undefined"
          && typeof document.createRange != "undefined") {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      } else if (typeof document.body.createTextRange != "undefined") {
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.collapse(false);
        textRange.select();
      }
    }
  
    placeCaretAtEnd(document.getElementById("text-input"));
  
    var delay = 1000;
    var timeoutId;
    timeoutId = window.setTimeout(hide, delay);
  
    function hide() {
      var cursor = document.querySelector(".cursor");
      cursor.style.display = "none";
  
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(show, delay);
    }
  
    function show() {
      var cursor = document.querySelector(".cursor");
      cursor.style.display = "block";
  
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(hide, delay);
    }
  
  });
  