function isPhoneNoExist(mobile) {
  var mobiles = jQuery('tr[data-phone]').map(function () {
    return jQuery(this).attr('data-phone');
  }).get().filter(m => m === mobile);

  return mobiles && mobiles.length > 0;
}

jQuery(document).ready(function () {

  jQuery('#myForm').submit(function (event) {
    event.preventDefault();
    var jQueryinputs = jQuery('#myForm :input');
    var values = {};

    jQueryinputs.each(function () {
      values[this.name] = jQuery(this).val();
      values[this.phone] = jQuery(this).val();
    });


    var name = jQuery("input[name='name']").val();
    var phone = jQuery("input[name='phone']").val();


    if (jQuery('#userName').val().length != 0 && jQuery('#userMob').val().length != 0) {


      if (values.phone.length == 10) {
        if (isPhoneNoExist(phone)) {
          alert('Phone number already exists!');
          return false;
        }

        jQuery('#displayArea').append("<tr data-name='" + name + "' data-phone='" + phone + "'><td class='star favtd'><a href='#' class='favorite'><span class='far fa-star'></span></a></td><td class='user-tab'>" + " <span class='user-name' id='name'>" + values.name + "</span></td><td class='phone-tab'><span class='user-phone'>" + values.phone + "</span></td><td class='btn-wrap'><a href='#' class='btn-edit'><i class='fas fa-edit'></i></a></td><td class='delete'><a href='#' class='delete-row'><i class='fa fa-trash-alt delete'></i></a></td></tr>");
        jQuery("input[type=text], textarea").val("");

      } else {
        alert("Please enter ten digit valid phone number");
      }
    } else {
      alert('Please fill all the details');
    }


    jQuery('.delete-row').on('click', function (event) {
      event.preventDefault();
      jQuery(this).closest('tr').remove();
    });

    jQuery("body").find(".btn-update").hide();

  });

  jQuery("body").on("click", ".btn-edit", function (event) {
    event.preventDefault();
    var name = jQuery(this).parents("tr").attr('data-name');
    var phone = jQuery(this).parents("tr").attr('data-phone');

    jQuery(this).parents("tr").find("td:eq(1)").html('<input name="edit_name" value="' + name + '">');
    jQuery(this).parents("tr").find("td:eq(2)").html('<input name="edit_phone" value="' + phone + '">');

    jQuery(this).parents("tr").find("td:eq(3)").prepend("<a href='#' class='btn-update'><i class='fas fa-check-circle' ></i ></a > <a href='#' class='btn-cancel'><i class='fas fa-times-circle'></i></a>")
    jQuery(this).hide();
  });

  jQuery("body").on("click", ".btn-cancel", function (event) {
    event.preventDefault();
    var name = jQuery(this).parents("tr").attr('data-name');
    var phone = jQuery(this).parents("tr").attr('data-phone');

    jQuery(this).parents("tr").find("td:eq(1)").text(name);
    jQuery(this).parents("tr").find("td:eq(2)").text(phone);

    jQuery(this).parents("tr").find(".btn-edit").show();
    jQuery(this).parents("tr").find(".btn-update").remove();
    jQuery(this).parents("tr").find(".btn-cancel").remove();
  });

  jQuery("body").on("click", ".btn-update", function (event) {
    event.preventDefault();
    var name = jQuery(this).parents("tr").find("input[name='edit_name']").val();
    var phone = jQuery(this).parents("tr").find("input[name='edit_phone']").val();

    jQuery(this).parents("tr").find("td:eq(1)").text(name);
    jQuery(this).parents("tr").find("td:eq(2)").text(phone);

    jQuery(this).parents("tr").attr('data-name', name);
    jQuery(this).parents("tr").attr('data-phone', phone);

    jQuery(this).parents("tr").find(".btn-edit").show();
    jQuery(this).parents("tr").find(".btn-cancel").remove();
    jQuery(this).parents("tr").find(".btn-update").remove();
  });

});
