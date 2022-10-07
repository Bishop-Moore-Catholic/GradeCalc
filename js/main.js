// Calculate result
function update() {
  var weight = Number($("input[name=w1]").val()) + Number($("input[name=w2]").val()) + Number($("input[name=w3]").val());
  if (weight != 100) {
    $("#typeAWarn").text("Weight does not equal 100%");
    $("#typeAWarn").removeClass("hide-warn");
  } else {
    $("#typeAWarn").addClass("hide-warn");
  }
  var g1 = Number(($("input[name=w1]").val() / 100) * $("input[name=g1]").val());
  var g2 = Number(($("input[name=w2]").val() / 100) * $("input[name=g2]").val());
  var g3 = Number(($("input[name=w3]").val() / 100) * $("input[name=g3]").val());
  var t = Number($("input[name=target]").val());
  var w1 = Number($("input[name=w1]").val() / 100);
  var w2 = Number($("input[name=w2]").val() / 100);
  var wf = Number($("input[name=w3]").val() / 100);
  var curr = (g1 + g2) / (w1 + w2);

  $("#typeAOut").text(Number((g1 + g2 + g3).toFixed(2)));

  if ($('input[name=target]').val() != '') {
    var req = Number((t - ((1 - wf) * curr)) / wf).toFixed(1);
    $('#typeAOut').addClass('d-none');
    $("input[name=g3]").prop('disabled', true);
    $("input[name=g3]").val('');
    $("input[name=g3]").addClass("alert-secondary");

    if (req > 100) {
      $("#typeAEst").text(req);
      $("#warn-req").removeClass("d-none");
      $("#warn-bel").addClass("d-none");
    } else if (req < 0) {
      $("#typeAEst").text(0);
      $("#warn-bel").removeClass("d-none");
      $("#warn-req").addClass("d-none");
    } else {
      $("#typeAEst").text(req);
      $("#warn-req").addClass("d-none");
      $("#warn-bel").addClass("d-none");
    }
  } else {
    $("#typeAEst").text("---");
    $('#typeAOut').removeClass('d-none');
    $("input[name=g3]").prop('disabled', false);
    $("input[name=g3]").removeClass("alert-secondary");
    $('input[name=target]').val('');
  }
}

// Button Functions

function setQuarter() {
  $("#heading1").text("Dailies");
  $("#heading2").text("Projects");
  $("#heading3").text("Tests");
  $("input[name='w1']").val(10);
  $("input[name='w2']").val(35);
  $("input[name='w3']").val(55);
  $("#estimator").addClass("d-none");
  $(".classLvl").removeClass("d-none");
}

function setSemester() {
  $("#heading1").text("Quarter 1");
  $("#heading2").text("Quarter 2");
  $("#heading3").text("Final Exam");
  $("input[name='w1']").val(40);
  $("input[name='w2']").val(40);
  $("input[name='w3']").val(20);
  $("#estimator").removeClass("d-none");
  $('input[name=target]').val('');
  $("#warn-req").addClass("d-none");
  $(".classLvl").addClass("d-none");
}

function setAP() {
  $("input[name='w1']").val(10);
  $("input[name='w2']").val(30);
  $("input[name='w3']").val(60);
}

function setHonors() {
  $("input[name='w1']").val(10);
  $("input[name='w2']").val(35);
  $("input[name='w3']").val(55);
}

function setReg() {
  $("input[name='w1']").val(10);
  $("input[name='w2']").val(40);
  $("input[name='w3']").val(50);
}

function setArt() {
  $("input[name='w1']").val(40);
  $("input[name='w2']").val(60);
  $("input[name='w3']").val(0);
}

function setReligion() {
  $("input[name='w1']").val(20);
  $("input[name='w2']").val(30);
  $("input[name='w3']").val(50);
}

$(".btn-toggle1").on("click", function(e){
  $('.btn-toggle1').removeClass('active');
  $(this).addClass('active');
  update();
});

$(".btn-toggle2").on("click", function(e){
  $('.btn-toggle2').removeClass('active');
  $(this).addClass('active');
  update();
});

// Prevent non digits
$('input').on('keypress', function(e){
  return e.metaKey || // cmd/ctrl
    e.which <= 0 || // arrow keys
    e.which == 8 || // delete key
    /[0-9]/.test(String.fromCharCode(e.which)); // numbers
})

// Update on load
$('body').on('click keyup scroll', update());

$(document).ready(function() {
  $('.default').click();
});

setInterval(function(){
  update();
}, 1000);