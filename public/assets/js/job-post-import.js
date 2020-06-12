
$(function () {

    $('#importPost').on('change', function (e) {
        e.preventDefault(e);
        console.log("\nImporting data from the website link\n");

        let link = $(this).val();
        console.log(link);

        // Import the Job Posting from the link
        $.ajax({
            url: "/api/import/?link="+link,
            method: "GET"
            }).then(function(response) {
                console.log(response);
        });





        }

        )
    })

    // $('#app-title').val(jobPosting.title);
    // $('#comp-name').val(jobPosting.company);
    // $('#comp-zipCode').val(jobPosting.location);
    // $('#app-desc').val(jobPosting.descriptionTxt)