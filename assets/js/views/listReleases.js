$(function() {
    $(document).ready(function() {
        console.log("Initializing table");
        $('#dataTables-releases').DataTable({
            responsive: true
        });
    });
});