@if($page->production)
@php
$manifest = json_decode(file_get_contents(public_path('/assets/build/manifest.json')), true);
@endphp

<script type="module" src="/assets/build/{{$manifest['source/_assets/js/main.ts']['file']}}"></script>
<link rel="stylesheet" href="/assets/build/{{$manifest['source/_assets/js/main.ts']['css'][0]}}">
@else
<script type="module" src="http://localhost:3000/@vite/client"></script>
<script type="module" src="http://localhost:3000/source/_assets/js/main.ts"></script>
@endif