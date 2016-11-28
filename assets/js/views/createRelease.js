$(function() {
    $(document).ready(function() {
        $('#addComponent').click(function() {
            $('#components').append('<div class="form-group input-group">' +
            '<input type="text" list="atlasComponents" name="components[][name]" class="form-control" title="Release Component">' +
            '<span class="input-group-btn"><button type="button" class="btn btn-danger remove-component"><i class="fa fa-times"></i></button></span></div>');
        });

        $('#components').on("click", ".remove-component", function () {
            console.log($(this));
            $(this).parent().parent().remove();
        });

        $('form').submit(function(e) {
            // Assigning correct array order to push data
            $('#components :input[type="text"]').each(function(i) {
                //$(this).context.name = 'components[' + i + '][name]';
                $(this)[0].name = 'components[' + i + '][name]';
            });
        });
    });
});