const elements = document.querySelectorAll("li")
const notification = document.querySelector('.notification')

for (const element of elements) {
  element.addEventListener('click', function(e) {
    var boxShadow = 'box-shadow: ' + window.getComputedStyle(this).getPropertyValue('box-shadow') + ';'

    console.log(boxShadow.toString())

    navigator.clipboard.writeText(boxShadow.toString()).then(function() {
      /* clipboard successfully set */
      notification.classList.add("notification--active")
      console.log("Copied to Clipboard")
      setTimeout(function(){
        notification.classList.remove("notification--active")
      }, 1200);
    }, function() {
      alert("Clipboard copy failed")
    });
  })
}