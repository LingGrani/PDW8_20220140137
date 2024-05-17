function submitForm() {
  var name = document.getElementById("inputnama").value;
  var speciality = document.getElementById("speciality").value;
  var lane = document.querySelector('input[name="lane"]:checked').value;

  var roles = [];
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(function (checkbox) {
      roles.push(checkbox.id);
  });

  var message = "Nama: " + name + "\n";
  message += "Speciality: " + speciality + "\n";
  message += "Lane: " + lane + "\n";
  message += "Roles: " + roles.join("/");

  alert(message);
}