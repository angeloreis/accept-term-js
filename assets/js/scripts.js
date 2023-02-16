const termNotification = document.querySelector("#term-notification");
const btnOk = termNotification.querySelector("#btn-term-ok");

document.addEventListener("DOMContentLoaded", function(e) {
  const useracceptTerm = localStorage.getItem('user-accept-by-click');
  if (!useracceptTerm) {
    termNotification.style.display = 'flex';
    return;
  }
  
  termNotification.style.display = 'none';
  return;
})

btnOk.addEventListener("click",function(e){
  e.preventDefault();

  localStorage.setItem('user-accept-by-click', true);

  termNotification.style.display = 'none';
})

