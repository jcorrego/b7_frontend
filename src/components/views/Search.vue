<template>
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
      <!-- Left column -->
      <div class="grid grid-cols-1 gap-4 lg:col-span-2">
        <div class="rounded-lg shadow overflow-hidden">
      <div class="bg-white">
        <div class="px-4 py-5 border-b border-gray-200 sm:px-6 rounded-lg">
          <h2 class="text-xl leading-6 font-medium text-sky-700">
            Advanced Search
          </h2>
        </div>
        <div
          class="px-4 py-5 sm:p-6"
        >Some summary information about the advanced search results...
        </div>
        <search-results></search-results>

      </div>

    </div>
      </div>

      <div class="grid grid-cols-1 gap-4">
        <div class="bg-white rounded-t-lg">
          <div class="px-4 py-5 border-b border-gray-200 sm:px-6 rounded-lg">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              Filters
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              Search by multiple fields
            </p>
          </div>
          <div class="px-4 py-5">
            Search by: <br>
            Dates, mutiple options <br>
            Task description <br>
            Duration <br>
            Focal Point <br>
            Overtime / reason <br>

          </div>
          <div
        class="px-4 py-3 bg-gray-50 text-right sm:px-6"
      >
        <button
          type="submit"
          class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Search
        </button>
      </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

import SearchResults from '../tables/SearchResults.vue'


export default {
    components: {
        SearchResults,
    },
    computed: {
        ...mapState({
            selectedProject: (state) => state.selectedProject,
        }),
    },

}
</script>
