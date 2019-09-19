function updateA() {
  var weight = Number($("input[name=w1]").val()) + Number($("input[name=w2]").val()) + Number($("input[name=w3]").val());
  if (weight != 100) {
     $("#typeAWarn").text("Weight does not equal 100%");
     $("#typeAWarn").removeClass("hide-warn");
  } else {
     $("#typeAWarn").addClass("hide-warn");
  }
   
  $("#typeAOut").text(
    Number((($("input[name=w1]").val() / 100) * $("input[name=g1]").val())
      + (($("input[name=w2]").val() / 100) * $("input[name=g2]").val())
      + (($("input[name=w3]").val() / 100) * $("input[name=g3]").val())).toFixed(3)
  );
}

setInterval(updateA, 1000);