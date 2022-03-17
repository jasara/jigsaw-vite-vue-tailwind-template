<!DOCTYPE html>
<html lang="{{ $page->language ?? 'en' }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="canonical" href="{{ $page->getUrl() }}">
    <meta name="description" content="{{ $page->description }}">
    <title>{{ $page->title }}</title>

    @include('_layouts.scripts')
</head>

<body class="text-gray-900 font-sans antialiased">
    <div id="app">
        @yield('body')
    </div>
</body>

</html>