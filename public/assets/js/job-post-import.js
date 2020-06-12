
$(function () {

    $('#importPost').on('change', function (e) {
        e.preventDefault(e);
        console.log("\nImporting data from the website link\n");

        let url = $(this).val();
        console.log(url);

        // Import the Job Posting from the URL
        $.get("/api/import/" + url, function (res) {

            console.log(res);


            $('#app-title').val(jobPosting.title);
            $('#comp-name').val(jobPosting.company);
            $('#comp-zipCode').val(jobPosting.location);
            $('#app-desc').val(jobPosting.descriptionTxt)

        }

        )
    })
})