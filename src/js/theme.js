jQuery(document).ready(function () {

  // if (jQuery('#myForm input').val() != "") {
  //   jQuery(".add-btn").prop('disabled', false);
  // } else {
  //   jQuery(".add-btn").prop('disabled', true);
  // }

  jQuery('#myForm').submit(function (event) {
    event.preventDefault();
    var jQueryinputs = jQuery('#myForm :input');
    var values = {};

    jQueryinputs.each(function () {
      values[this.name] = jQuery(this).val();
      values[this.phone] = jQuery
    });

    if (jQuery(values.phone.length != 0 && values.name.length != 0)) {

      if (values.phone.length > 0) {
        if (jQuery('#userMob').val().match(/^[0-9-+]+$/)) {
          jQuery('#displayArea').append("<div class='row table-row'><div class='col-md-6 favtd'>" + "<a href='#' class='favorite'><span class='far fa-star'></span></a>" + "<span class='fa fa-user'></span>" + "<span class='user-name'>" + values.name + "</span>" + "</div><div class='col-md-4 favtd'>" + "<span class='fa fa-phone-alt'></span><span class='user-phone'>" + values.phone + "</span></div><div class='col-md-2'><div class='btn-wrap'> <a href='#' class='btn-edit'><i class='fas fa-edit'></i></a><a href='#' class='delete-row'><i class='fa fa-trash-alt delete'></i></a></div>" + "</div></div>");
          jQuery("input[type=text], textarea").val("");
        } else {
          alert("Please enter valid phone number");
        }
      }
    }
    else {
      alert('Please fill all the details');
    }

    jQuery('.delete-row').on('click', function (event) {
      event.preventDefault();
      jQuery(this).closest('.table-row').remove();
    });

    jQuery('.favorite').on('click', function (event) {
      event.preventDefault();
      jQuery('.favorite span').toggleClass('fa');
    });

    jQuery("body").find(".btn-update").hide();

    // $(".selected").each(function (index) {})
    jQuery("body").on("click", ".btn-edit", function (e) {
      e.stopImmediatePropagation();
      var name = values.name;
      var phone = values.phone;

      jQuery(this).parents(".table-row").find(".user-name").html('<input class="form-control" name="edit_name" value="' + name + '">');
      jQuery(this).parents(".table-row").find(".user-phone").html('<input class="form-control" type="text" id="userMob" name="edit_phone" placeholder="Phone Number"  maxlength="10"  value="' + phone + '">');

      jQuery(this).parents(".table-row").find(".btn-wrap").prepend("<a  href='#' class='btn-update'><i class='fas fa-check-circle'></i></a><a href='#' class='btn-cancel'><i class='fas fa-times-circle'></i></a>");
      jQuery(this).hide();
    });

    jQuery("body").on("click", ".btn-cancel", function () {
      var name = values.name;
      var phone = values.phone;

      jQuery(this).parents(".table-row").find(".user-name").text(name);
      jQuery(this).parents(".table-row").find(".user-phone").text(phone);

      jQuery(this).parents(".table-row").find(".btn-edit").show();
      jQuery(this).parents(".table-row").find(".btn-update").remove();
      jQuery(this).parents(".table-row").find(".btn-cancel").remove();
    });

    jQuery("body").on("click", ".btn-update", function () {
      var name = jQuery(this).parents(".table-row").find("input[name='edit_name']").val();
      var phone = jQuery(this).parents(".table-row").find("input[name='edit_phone']").val();

      jQuery(this).parents(".table-row").find(".user-name").text(name);
      jQuery(this).parents(".table-row").find(".user-phone").text(phone);

      jQuery(this).parents(".table-row").attr('data-name', name);
      jQuery(this).parents(".table-row").attr('data-phone', phone);

      jQuery(this).parents(".table-row").find(".btn-edit").show();
      jQuery(this).parents(".table-row").find(".btn-cancel").remove();
      jQuery(this).parents(".table-row").find(".btn-update").remove();
    });

  });

});
