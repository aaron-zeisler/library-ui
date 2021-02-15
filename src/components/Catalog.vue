<template>
    <div>
        <div>
            <h1>View the library's catalog of book</h1>
        </div>
        <div id="catalog-table">
            <v-simple-table>
                <template v-slot:default>
                    <thead>
                        <th>Book ID</th>
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>
                    </thead>
                    <tbody>
                        <tr
                        v-for="book in books"
                        :key="book.id"
                        >
                            <td>{{ book.id }}</td>
                            <td>{{ book.isbn }}</td>
                            <td>{{ book.title }}</td>
                            <td>{{ book.author }}</td>
                            <td>{{ book.description }}</td>
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
    margin-top: 60px;
}
#catalog-table.table {
    border-width: 1px solid gray;
}
</style>