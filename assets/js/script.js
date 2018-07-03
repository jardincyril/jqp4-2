$(function() {

  $('#click').click(function(){

    var note1 = parseFloat($('#Note1').val());
    var note2 = parseFloat($('#Note2').val());
    var note3 = parseFloat($('#Note3').val());
    var note4 = parseFloat($('#Note4').val());
    var note5 = parseFloat($('#Note5').val());
    
    var regexNumber = /^[0-9]{1,2}[\.]{0,1}[0-9]{0,2}$/;
if(regexNumber.test(note1) && regexNumber.test(note2) && regexNumber.test(note3) && regexNumber.test(note4) && regexNumber.test(note5)){
    var moyenneG = (note1 + note2 + note3 + note4 + note5)/5;
    alert('moyenne :' + moyenneG);

    if((moyenneG >= 0) && (moyenneG < 10)){
      $('p').text('En dessous de la moyenne');
    }else if((moyenneG >= 10) && (moyenneG < 13)){
      $('p').text('moyen');
    }else if((moyenneG >= 13) && (moyenneG < 16)){
      $('p').text('bien');
    }else if((moyenneG >= 16) && (moyenneG < 20)){
      $('p').text('Très bien');
    }else if(moyenneG == 20){
      $('p').text('Excellent');
  }
});
});
