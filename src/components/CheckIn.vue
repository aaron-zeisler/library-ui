<template>
    <div>
        <div>
            <h1>Check a book back into the library</h1>
        </div>
        <div id="check-in">
            <v-container grid-list-lg>
                <v-select
                :items="filteredBooks"
                :item-text="titleAndAuthor"
                item-value="id"
                label="Choose a book to check in"
                style="width: 50%; display:inline-block; text-align: left;"
                @change="changedValue"
                no-data-text="All the books are checked in!"
                ></v-select>
            </v-container>
            <v-btn
                id="checkin-button"
                :disabled="buttonDisabled"
                class="ma-2"
                :loading="loading"
                color="secondary"
                @click="buttonClicked"
            >
                    Check In
            </v-btn>
            <v-alert
                :value="showError"
                type="error"
                transition="fade-transition"
                class="alert"
            >
                An error happened while checking in the book
            </v-alert>
            <v-alert
                :value="showSuccess"
                type="success"
                transition="fade-transition"
                class="alert"
            >
                The book was successfully checked in
            </v-alert>
        </div>
    </div>
</template>


<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                books: [],
                buttonDisabled: true,
                loading: false,
                selectedBook: "",
                showError: false,
                showSuccess: false,
            }
        },
        mounted( ) {
            this.getBooks();
        },
        methods: {
            getBooks() {
                let url = this.$libraryAPIBaseUrl + "/books";
                axios.get(url).then((response) => {
                    this.books = response.data;
                }).catch( error => { console.log(error); });
            },
            titleAndAuthor(book) {
                return book.title + ' by ' + book.author;
            },
            changedValue(value) {
                if ( value != "" ) {
                    this.buttonDisabled = false;
                    this.selectedBook = value;
                }
            },
            buttonClicked() {
                this.loading = true;

                let url = this.$libraryAPIBaseUrl + "/book/" + this.selectedBook + "/check-in";
                axios.post(url).then(() => {
                    console.log("successfully checked in");
                    this.showSuccess = true;
                    this.loading = false;
                    this.hideSuccess();

                }).catch( error => {
                    console.log(error);
                    this.showError = true;
                    this.loading = false;
                    this.hideError();
                });
            },
            hideSuccess: function () {
                window.setInterval(() => {
                    this.showSuccess = false;
                }, 3000)
            },
            hideError: function () {
                window.setInterval(() => {
                    this.showError = false;
                }, 3000)
            },
        },
        computed: {
            filteredBooks() {
                return this.books.filter(book => book.book_status === 'out')
            }
        },
        
    }
</script>

<style>
#check-in {
    margin-top: 50px;
}

.v-select__selections input {
    display: none;
}

.alert {
    margin-top: 20px;
    margin-left: 50px;
    margin-right: 50px;
}

.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>