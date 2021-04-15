jQuery(document).ready(function () {

  jQuery('#myForm').submit(function (event) {
    event.preventDefault();
    var jQueryinputs = jQuery('#myForm :input');
    var values = {};

    jQueryinputs.each(function () {
      values[this.name] = jQuery(this).val();
      values[this.phone] = jQuery(this).val();
    });


    var name = $("input[name='name']").val();
    var phone = $("input[name='phone']").val();


    if (jQuery('#userName').val().length != 0 && jQuery('#userMob').val().length != 0) {

      if (values.phone.length > 0) {
        if (jQuery('#userMob').val().match(/^[0-9-+]+$/)) {

          jQuery('#displayArea').append("<table class='table' id='datatable'><tbody><tr data-name='" + name + "' data-phone='" + phone + "'><td class='star favtd'><a href='#' class='favorite'><span class='far fa-star'></span></a></td><td class='favtd user-tab'>" + " <span class='user-name'>" + values.name + "</span></td><td class='favtd phone-tab'><span class='user-phone'>" + values.phone + "</span></td><td class='btn-wrap'><a href='#' class='btn-edit'><i class='fas fa-edit'></i></a></td><td class='delete'><a href='#' class='delete-row'><i class='fa fa-trash-alt delete'></i></a></td></tr></tbody></table >");

          jQuery("input[type=text], textarea").val("");
        } else {
          alert("Please enter valid phone number");
        }
      }
    } else {
      alert('Please fill all the details');
    }


    jQuery('.delete-row').on('click', function (event) {
      event.preventDefault();
      jQuery(this).closest('.table').remove();
    });

    jQuery("body").find(".btn-update").hide();

  });

  $("body").on("click", ".btn-edit", function (event) {
    event.preventDefault();
    var name = $(this).parents("tr").attr('data-name');
    var phone = $(this).parents("tr").attr('data-phone');

    $(this).parents("tr").find("td:eq(1)").html('<input name="edit_name" value="' + name + '">');
    $(this).parents("tr").find("td:eq(2)").html('<input name="edit_phone" value="' + phone + '">');

    $(this).parents("tr").find("td:eq(3)").prepend("<a href='#' class='btn-update'><i class='fas fa-check-circle' ></i ></a > <a href='#' class='btn-cancel'><i class='fas fa-times-circle'></i></a>")
    $(this).hide();
  });

  $("body").on("click", ".btn-cancel", function (event) {
    event.preventDefault();
    var name = $(this).parents("tr").attr('data-name');
    var phone = $(this).parents("tr").attr('data-phone');

    $(this).parents("tr").find("td:eq(1)").text(name);
    $(this).parents("tr").find("td:eq(2)").text(phone);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-update").remove();
    $(this).parents("tr").find(".btn-cancel").remove();
  });

  $("body").on("click", ".btn-update", function (event) {
    event.preventDefault();
    var name = $(this).parents("tr").find("input[name='edit_name']").val();
    var phone = $(this).parents("tr").find("input[name='edit_phone']").val();

    $(this).parents("tr").find("td:eq(1)").text(name);
    $(this).parents("tr").find("td:eq(2)").text(phone);

    $(this).parents("tr").attr('data-name', name);
    $(this).parents("tr").attr('data-phone', phone);

    $(this).parents("tr").find(".btn-edit").show();
    $(this).parents("tr").find(".btn-cancel").remove();
    $(this).parents("tr").find(".btn-update").remove();
  });

});
