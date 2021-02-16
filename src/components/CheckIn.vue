<template>
    <div>
        <div>
            <h1>Check a book back into the library</h1>
        </div>
        <div id="check-in">
            <v-container grid-list-lg>
                <v-select
                :items="books"
                :item-text="titleAndAuthor"
                item-value="id"
                label="Choose a book to check in"
                style="width: 50%; display:inline-block; text-align: left;"
                @change="changedValue"
                ></v-select>
            </v-container>
            <v-btn id="checkout-button" :disabled="buttonDisabled">
                Check Out
            </v-btn>
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
            }
        },
        mounted( ) {
            this.getBooks()
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
                }
            },
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
</style>