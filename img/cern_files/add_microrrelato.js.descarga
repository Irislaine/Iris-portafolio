;
jQuery(function ($) {
    $(".microrrelatos_form input,.microrrelatos_form textarea,.microrrelatos_form select").jqBootstrapValidation(
        {
            autoAdd: {helpBlocks: true},
            preventSubmit: true,
            submitError: function ($form, event, errors) {

            },
            submitSuccess: function ($form, event) {
                event.preventDefault();
                $form.find("[type=submit]").button('loading');
                var data = new FormData($form[0]);
                $.ajax({
                    url: microrrelatos_data.ajax_url,
                    data: $form.serialize(),
                    dataType: "json",
                    type: 'POST',
                    success: function (response) {
                        if (response.ok) {
                            $form.addClass("hidden");
                            $form.parents(".microrrelatos").find(".microrrelatos_success").removeClass("hidden");
                        } else {
                            $form.find("[type=submit]").button('reset');
                            alert(response.msg);
                        }
                    },
                    error: function (response) {
                        $form.find("[type=submit]").button('reset');
                        if (response && response.msg) {
                            alert(response.msg);
                        }
                    }
                });
            },
            filter: function () {
                return $(this).is(":visible");
            }
        }
    );
});
