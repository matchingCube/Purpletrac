<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>{{ config('app.name') }}</title>
  <!-- Splash Screen/Loader Styles -->
  <link rel="stylesheet" type="text/css" href="{{ asset(mix('css/loader.css')) }}" />

  {{-- <meta name="description" content="Ground Force Trucking">
  <meta name="author" content="pixelcave">
  <meta name="robots" content="noindex, nofollow">

  <!-- Open Graph Meta -->
  <meta property="og:title" content="Ground Force Trucking">
  <meta property="og:site_name" content="OneUI">
  <meta property="og:description" content="Ground Force Trucking">
  <meta property="og:type" content="website">
  <meta property="og:url" content="">
  <meta property="og:image" content=""> --}}

  <!-- Icons -->
  <link rel="shortcut icon" href="{{ asset('favicon.png') }}" />
  <!-- The following icons can be replaced with your own, they are used by desktop and mobile browsers -->
  {{-- <link rel="shortcut icon" href="{{ asset('/media/favicons/favicon.jpg') }}">
  <link rel="icon" type="image/png" sizes="192x192" href="{{ asset('/media/favicons/favicon-192x192.jpg') }}">
  <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('/media/favicons/apple-touch-icon-180x180.pnjpg') }}"> --}}
  <!-- END Icons -->

  <!-- Stylesheets -->
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,400&display=swap"
    rel="stylesheet">
  <!-- Fonts and OneUI framework -->
  {{-- <link rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400italic,600,700%7COpen+Sans:300,400,400italic,600,700"> --}}
  <!-- Styles -->
  <link rel="stylesheet" href="{{ asset(mix('css/app.css')) }}">

  @livewireStyles
</head>

<body>
  <noscript>
    <strong>We're sorry but Vuexy - Vuejs, HTML & Laravel Purpletrac Dashboard Webapp doesn't work properly without
      JavaScript enabled. Please enable it to continue.</strong>
  </noscript>
  <div id="loading-bg">
    <div class="loading-logo">
      <img src="{{ asset('logo-loading.svg') }}" alt="Logo" height="64px" width="74px" />
    </div>
    <div class="loading">
      <div class="effect-1 effects"></div>
      <div class="effect-2 effects"></div>
      <div class="effect-3 effects"></div>
    </div>
  </div>
  <div id="app">
  </div>
  {{-- <div id="page-container" class="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed">


    @include('navigation-dropdown')

    <!-- Page Content -->
    <main id="main-container">
      {{ $slot }}
    </main>

    <!-- Footer -->
    <footer id="page-footer" class="bg-body-light">
      <div class="content py-3">
        <div class="row font-size-sm">
          <div class="col-sm-6 order-sm-2 py-1 text-center text-sm-right">
            Crafted with <i class="fa fa-heart text-danger"></i> by <a class="font-w600"
              href="https://github.com/unbreakablery" target="_blank">{{ env('AUTHOR') }}</a>
          </div>
          <div class="col-sm-6 order-sm-1 py-1 text-center text-sm-left">
            <a class="font-w600" href="https://www.groundforcetrucking.com/"
              target="_blank">{{ config('app.name') }}</a> &copy; <span data-toggle="year-copy"></span>
          </div>
        </div>
      </div>
    </footer>
    <!-- END Footer -->
  </div> --}}

  @stack('modals')

  @livewireScripts

  <!-- Scripts -->
  <script src="{{ asset(mix('js/app.js')) }}"></script>
  {{-- <script src="{{ asset('js/core.js') }}"></script>
  <script src="{{ asset('js/dashboard.js') }}"></script> --}}
</body>

</html>