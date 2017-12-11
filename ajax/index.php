<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Ajax Example</title>
        <link href="css/style.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        <h1>Ajax Example</h1>

        <div class="main">
            <p>Enter Username</p>
            <input type="text" name="name" id="name" autocomplete="off"/>
            <button type="submit" name="submit" id="submit">Submit</button>
            <div class="data">
                <p>User Details: </p>
                <div>

                </div>
            </div>
        </div>
        <?php
        ?>



        <script src="../js/jquery.js" type="text/javascript"></script>
        <script type="text/javascript">
            $(function () {
                $('#submit').click(function () {
                    var username = $('#name').val();
//                    $.post('http://localhost/study/ajax/data/data.php', {name: username}, function (data) {
//                        $('.data').fadeIn();
//                        $('.data > div').html(data);
//                    });

                    $.ajax({
                        url: 'http://localhost/study/ajax/data/data.php',
                        data: {name: username},
                        type: 'POST',
                        success: function (data) {
                            $('.data').slideDown('fast');
                            $('.data > div').html(data);
                        }
                    });
                });
            });
        </script>
    </body>
</html>
