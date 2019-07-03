<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <base href="/">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <!-- Javascripts -->
        <script src="{{ mix('js/vendor.js') }}"></script>
        
    </head>
    <body>
            <app-root></app-root>
            <!-- <script src="{{ mix('js/app.js') }}"></script> -->
            <script type="text/javascript" src="{{ asset('dist/runtime.26209474bfa8dc87a77c.js') }}"></script>
            <script type="text/javascript" src="{{ asset('dist/es2015-polyfills.bda95d5896422d031328.js') }}" nomodule></script>
            <script type="text/javascript" src="{{ asset('dist/polyfills.8bbb231b43165d65d357.js') }}"></script>
            <script type="text/javascript" src="{{ asset('dist/main.cad4b9cc41592647d951.js') }}"></script>         
    </body>
</html>
