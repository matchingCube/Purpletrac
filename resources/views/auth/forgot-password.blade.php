<x-guest-layout>
    <!-- Main Container -->
    <main id="main-container">

        <!-- Page Content -->
        <div class="bg-image" style="background-image: url('/media/photos/Header-Photo-Update-4.jpg');">
            <div class="hero-static">
                @if (session('status'))
                    <div class="alert alert-info alert-dismissable" role="alert">
                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        <p class="mb-0"><i class="fa fa-fw fa-info-circle"></i> {{ session('status') }}</p>
                    </div>
                @endif

                <div class="content">
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-lg-6 col-xl-4">
                            <!-- Reset Password Request Block -->
                            <div class="block block-themed block-fx-shadow mb-0">
                                <div class="block-header bg-info">
                                    <h3 class="block-title">Reset Password Request</h3>
                                </div>
                                <div class="block-content">
                                    <div class="p-sm-3 px-lg-4 py-lg-5">
                                        <h1 class="mb-2">{{ config('app.name') }}</h1>
                                        <p>{{ __('Do you want to reset your password?. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.') }}</p>

                                        @if ($errors->any())
                                        @foreach ($errors->all() as $error)
                                        <div class="alert alert-danger alert-dismissable" role="alert">
                                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                            <p class="mb-0"><i class="fa fa-fw fa-info-circle"></i> {{ $error }}</p>
                                        </div>
                                        @endforeach
                                        @endif
                                        
                                        <form class="js-validation-signup" action="{{ route('password.email') }}" method="POST">
                                            @csrf
                                            <input type="hidden" name="token" value="{{ $request->route('token') }}">
                                            <div class="py-3">
                                                <div class="form-group">
                                                    <label for="email">Email: </label>
                                                    <input type="email" class="form-control form-control-lg form-control-alt" id="email" name="email" value="{{ old('email') }}" required placeholder="Enter Your Email.." autofocus>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <div class="col-md-12 col-xl-12">
                                                    <button type="submit" class="btn btn-block btn-info">
                                                        {{ __('Email Password Reset Link') }}
                                                    </button>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <div class="custom-control text-right">
                                                    <a class="text-sm text-gray-600 hover:text-gray-900" href="{{ route('login') }}">
                                                        {{ __('Back') }}
                                                    </a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- END Reset Password Block -->
                        </div>
                    </div>
                </div>
                <div class="content content-full font-size-sm text-white text-center">
                    <strong>{{ config('app.name') }}</strong> &copy; <span data-toggle="year-copy"></span>
                </div>
            </div>
        </div>
        <!-- END Page Content -->

    </main>
    <!-- END Main Container -->
</x-guest-layout>
