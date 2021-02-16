<template>
    <div>
        <div>
            <h1>View the library's catalog of books</h1>
        </div>
        <div id="catalog-table">
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        <tr
                        v-for="book in books"
                        :key="book.id"
                        >
                            <td>{{ book.isbn }}</td>
                            <td class="nowrap">{{ book.title }}</td>
                            <td class="nowrap">{{ book.author }}</td>
                            <td>{{ book.description }}</td>
                            <td>{{ book.book_status }}</td>
                        </tr>
                    </tbody>
                </template>
            </v-simple-table>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
               books: []
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
            }
        },
    }
</script>

<style>
#catalog-table {
    margin-top: 50px;
    padding-left: 20px;
    padding-right: 20px;
}
#catalog-table.table {
    border-width: 1px solid gray;
}
.nowrap {
    white-space: nowrap;
}
</style>