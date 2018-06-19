
$(function () {
  $('#charger').click(function () {

    $.ajax({
      type: "GET",
      url: "http://localhost:3011/list",
      success: function (datas) {
        $('#list').html('<ul id="elementlist" class="list-group  border border-dark  p-5  mt-5"> </ul> ');

        
        $.each(datas, function (index, data) {

          $('#elementlist').append('<li class="mb-3 list-group-item"> ' +
            data._id +
            "</br><span class='font-weight-bold'> Index :  </span>" +
            data.index +
            " </br> <span class='font-weight-bold'>  Prenom : </span>" +
            data.name.first + "</br> <span class='font-weight-bold'> Nom : </span>" +
            data.name.last + '</li>');
        });
      }
    });
  })

});
$('#effacer').click(function () {
  // $('div').empty("#elementlist"); ne fonctionnait pas pas la bonne syntaxe
  $("#elementlist").empty();
  console.log("Effacer");
});

// $(function () {
//   $.ajax({
//     type: "GET",
//     url: "http://localhost:3011/list",
//     success: function (datas) {
//       $('#list').html('<ul id="elementlist" class="list-group list-group-flush border border-dark  p-5  mt-5"> </ul> ');
//       $.each(datas, function (index, data) {


//         $('#elementlist').append('<li class="mb-3 list-group-item"> ' + data._id + "</br><span class='font-weight-bold'> Index :  </span>" + data.index + " </br> <span class='font-weight-bold'>  Prenom : </span>" + data.name.first + "</br> <span class='font-weight-bold'> Nom : </span>" + data.name.last + '</li>');
//       });
//     }
//   }); 


// });

// $(function () {
//   $.getJSON('data.json', function (datas) {
//     $('#r').html('<ul id="list" class="list-group list-group-flush border border-dark  p-5  mt-5"> </ul> ');
//     $.each(datas, function (index, data) {


//       $('#list').append('<li class="mb-3"> ' + data._id + "</br><span class='font-weight-bold'> Index :  </span>" + data.index + " </br> <span class='font-weight-bold'>  Prenom : </span>" + data.name.first + "</br> <span class='font-weight-bold'> Nom : </span>" + data.name.last + '</li>');
//     });

//   });
// });