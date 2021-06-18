<template>
<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
-->
<div class="min-h-screen bg-white flex">
  <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
    <div class="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <img class="h-12 w-auto" src="../assets/bairesdev-logo-blue.svg" alt="Workflow">
        <h2 class="mt-6 text-2xl font-extrabold text-gray-500">
          Time Tracker
        </h2>
        <p class="mt-2 text-sm text-gray-600">
          You should use your BairesDev email account to access this platform.
        </p>
      </div>

      <div class="mt-8">
        <div>
          <div class="flex items-center justify-around">
            <p class="text-sm font-medium text-blue-400">
              Sign in with
            </p>
            <div class="mt-1 w-36">
              <div>
                <a @click.prevent="loginWithGoogle" href="#" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  <span class="sr-only">Sign in with Google</span>
                  <span class="w-5 h-5"><i class="fab fa-google"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 relative">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">
                Need some help?
              </span>
            </div>
          </div>
      </div>
      <div class="mt-6 relative">
        <p class="mt-2 text-sm text-gray-600">
          If you have any problem, raise a Support Request in <a class="text-blue-500" href="https://bairesdev.atlassian.net/servicedesk">Service Desk</a>.
        </p>
        <p class="mt-2 text-sm text-gray-600">
          If you want to change your password, <a class="text-blue-500" href="https://timetracker.bairesdev.com/CambiarClave.aspx">click here</a>.
        </p>
      </div>
    </div>
  </div>
  <div class="hidden lg:block relative w-0 flex-1">
    <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80" alt="">
  </div>
</div>

  <!-- <div class="py-10">
    <header>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          Login ok
          {{ $store.state.loginUser }}
        </h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="px-4 py-8 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
            <a href="#" class="google-signup" >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><title>Google</title><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"></path><path fill="#34A853" d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"></path><path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"></path><path fill="#EA4335" d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"></path></g></svg>
                Google
            </a>
          </div>
        </div>
      </div>
    </main>
  </div> -->
</template>

<script>
export default {
  methods: {
    loginWithGoogle() {
      this.$gAuth
        .signIn()
        .then((GoogleUser) => {
          console.log('GoogleUser', GoogleUser);
          console.log('getId', GoogleUser.getId());
          console.log('basicprofile', GoogleUser.getBasicProfile().getName());
          console.log('getBasicProfile', GoogleUser.getBasicProfile());
          console.log('getAuthResponse', GoogleUser.getAuthResponse());
          const userInfo = {
            loginType: 'google',
            google: {
              auth: GoogleUser.getAuthResponse(),
              user: {
                name: GoogleUser.getBasicProfile().getName(),
                email: GoogleUser.getBasicProfile().getEmail(),
                profileImage: GoogleUser.getBasicProfile().getImageUrl(),
              },
            },
          };
          this.$store.commit('setLoginUser', userInfo);
          this.$router.push('/track');
        })
        .catch((error) => {
          console.log('error', error);
        });
    },
  },
};
</script>
